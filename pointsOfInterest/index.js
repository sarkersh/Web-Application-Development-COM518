const express = require("express");
const session = require("express-session");
const poiRouter = require("./routes/poiRoutes.js");
const auth = require("./middleware/auth.js");
const path = require("path");
const dotenv = require("dotenv");
const notFoundMiddleware = require("./middleware/not-found.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
dotenv.config();
// app.use(
//   session({
//     secret: "poi-secret",
//     cookie: { maxAge: 30000 },
//     resave: false,
//     saveUninitialized: false,
//   })
// );
const port = process.env.PORT || 9001;
app.use(cors());
app.use(express.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "/view/build")));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/api/v1", (req, res) => {
  res.json({ msg: "Welcome" });
});
app.use("/api/v1/poi", poiRouter);

// To get response on index.html inside view/build
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./view/build", "index.html"));
// });

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
// app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
