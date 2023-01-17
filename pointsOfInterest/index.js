const express = require("express");
const session = require("express-session");
const poiRouter = require("./routes/routes.js")(app);
const auth = require("./middleware/auth.js");
const path = require("path");
const dotenv = require("dotenv");
const notFoundMiddleware = require("./middleware/not-found.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
dotenv.config();

const port = process.env.PORT || 8081;
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set("views","./views");
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({extended: true}));

app.get("/api/v1", (req, res) => {
  res.json({ msg: "Welcome" });
});
app.use("/api/v1/poi", poiRouter);

// To get response on index.html inside view/build
app.get("/login", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./views/", "login.ejs"));
});

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./views/", "home.ejs"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
// app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
