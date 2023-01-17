const db = require("../database/database.js");
const helper = require("../helper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const attachCookies = require("../utils/attachCookie.js");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    try {
      const [data] = await db.query(
        `SELECT * FROM poi_users WHERE username = "${username}"`
      );

      if (data) {
        async function checkUser(password, data) {
          const match = await bcrypt.compare(password, data.password);

          if (match) {
            const token = jwt.sign(
              { username: data.username },
              process.env.JWTSECRET,
              { expiresIn: process.env.JWT_LIFETIME }
            );
            attachCookies({ res, token });
            res
              .status(200)
              .json({ msg: "Login Successfully", user: data.username });
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
  const [data] = await db.query(
    `SELECT * FROM poi_users WHERE username = "${req.user.username}"`
  );

  res.status(200).json({ user: data.username });
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

  try {
    const pg = Number(page) || 1;
    const lmt = Number(limit) || 10;
    const offset = (pg - 1) * lmt;
    const rows = await db.query(
      search && search.length > 0
        ? `SELECT * FROM pointsofinterest WHERE region LIKE '${search}%'`
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
    lng,
    lat,
    description,
    recommendations,
  } = req.body;
  // console.log(
  //   name,
  //   type,
  //   country,
  //   region,
  //   lng,
  //   lat,
  //   description,
  //   recommendations
  // );
  try {
    {
      const row = await db.query(
        "INSERT INTO pointsofinterest(name, type, country, region, lon, lat, description, recommendations) VALUES('" +
          name +
          "','" +
          type +
          "','" +
          country +
          "','" +
          region +
          "','" +
          lng +
          "','" +
          lat +
          "','" +
          description +
          "','" +
          recommendations +
          "')"
      );
      res.status(200).json({ msg: "Poi created Successfully", row });
    }
  } catch (err) {
    res.status(400).json({ err: "Poi creation failed" });
  }
};

// To increment recommendations or post data in recommendation feild on particular id
const recommendedPoi = async (req, res) => {
  const poiID = req.params.id;
  const { recommendations } = req.body;
  console.log(poiID, recommendations);
  try {
    await db.query("UPDATE pointsofinterest SET recommendations=? WHERE id=?", [
      recommendations,
      poiID,
    ]);
    res.status(200).json("One user recommended");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPoi:createPoi,
  getAllPointOfInterests:getAllPointOfInterests,
  recommendedPoi:recommendedPoi,
  loginUser:loginUser,
  getPoiUser:getPoiUser,
  logout:logout
};
