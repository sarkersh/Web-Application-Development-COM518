const db = require("../config/dbConnection");
const helper = require("../helper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const attachCookies = require("../utils/attachCookie.js");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const [data] = await db.conection(
        `SELECT * FROM poi_users WHERE username = "${email}"`
      );

      if (data) {
        async function checkUser(password, data) {
          const match = await bcrypt.compare(password, data.password);

          if (match) {
            const token = jwt.sign(
              { email: data.email },
              process.env.JWTSECRET,
              { expiresIn: process.env.JWT_LIFETIME }
            );
            attachCookies({ res, token });
            res
              .status(200)
              .json({ msg: "Login Successfully", user: data.email });
          } else {
            res.status(401).json({ msg: "Login failed" });
          }

          //...
        }

        checkUser(password, data);
      }
    } catch (err) {
      res.status(401).json({ err: err.msg });
    }
  }
};

const getPoiUser = async (req, res) => {
  const [data] = await db.conection(
    `SELECT * FROM poi_users WHERE email = "${req.user.email}"`
  );

  res.status(200).json({ user: data.email });
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ msg: "user logged out" });
};

// To get all poi data from db
const getAllPointOfInterests = async (req, res) => {
  const { page, limit, search } = req.query;
  console.log(page, limit, search);
  try {
    const pg = Number(page) || 1;
    const lmt = Number(limit) || 10;
    const offset = (pg - 1) * lmt;
    const rows = await db.conection(
      search && search.length > 0
        ? `SELECT * FROM pointsofinterest WHERE region LIKE '${search}%' LIMIT ${lmt} OFFSET ${offset} `
        : `SELECT * FROM pointsofinterest LIMIT ${lmt} OFFSET ${offset} `
    );

    const data = helper.emptyOrRows(rows);
    const totalRows = data.length;
    const numOfPages = Math.ceil(totalRows / limit);
    res.json({
      totalRows,
      rows: data,
      numOfPages,
    });
  } catch (err) {
    console.log(err);
  }
};

// To Post new poi data to db
const createPoi = async (req, res) => {
  const {
    name,
    type,
    country,
    region,
    lon,
    lat,
    description,
    recommendations,
  } = req.body;

  if (
    name &&
    type &&
    country &&
    region &&
    lon &&
    lat &&
    description &&
    recommendations
  ) {
    try {
      const row = await db.conection(
        "INSERT INTO pointsofinterest(name, type, country, region, lon, lat, description, recommendations) VALUES('" +
          name +
          "','" +
          type +
          "','" +
          country +
          "','" +
          region +
          "','" +
          lon +
          "','" +
          lat +
          "','" +
          description +
          "','" +
          recommendations +
          "')"
      );
      res.status(200).send(row);
    } catch (err) {
      console.error(err);
    }
  }
};

// //generating token on homepage
// const genTokenHome = async (req, res) => {
//   const { user } = req.query;
//   console.log(user);
//   try {
//     if (user) {
//       const [data] = await db.query(
//         `SELECT * FROM poi_users WHERE username = "${user}"`
//       );
//       const token = jwt.sign({ username: data.user }, "secret", {
//         expiresIn: "1d",
//       });
//       console.log(token);
//       res.json({
//         token,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// To increment recommendations or post data in recommendation feild on particular id
const recommendedPoi = async (req, res) => {
  const poiID = req.params.id;
  const { recommendations } = req.body;
  try {
    await db.conection("UPDATE pointsofinterest SET recommendations=? WHERE id=?", [
      recommendations,
      poiID,
    ]);
    res.send("One user recommended");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPoi,
  getAllPointOfInterests,
  recommendedPoi,
  loginUser,
  getPoiUser,
  logout,
};
