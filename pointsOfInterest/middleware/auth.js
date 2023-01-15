const jwt = require("jsonwebtoken");
const authCheck = async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token);
  // if (!token) {
  //   throw error("Authentication Invalid");
  // }
  try {
    const payload = jwt.verify(token, process.env.JWTSECRET);
    req.user = { username: payload.username };
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      res.status(401).json({ msg: err.msg });
    } else {
      res.sendStatus(401).json({ msg: "this error" });
    }
  }
};

module.exports = authCheck;
