const express = require("express");
const poiRouter = require("./routes/poiRoutes");

const app = express();
const port = 9000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(poiRouter);
app.get("/", (req, res) => {
    res.send("<h1>This is the home page</h1>");
})

app.listen(port, () => {
    console.log(`App is lisenting at http://localhost:${port}`);
});