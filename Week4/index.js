const express = require('express');
const app = express();
const path = require('path');
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
const static_path = path.join(__dirname, 'public');
app.use(express.static(static_path));

datas=[
    {
        "id": 1,
        "name": "Amjad",
        "adress": "London"
    },
    {
        "id": 2,
        "name": "Shakil",
        "adress": "Luton"
    },
    {
        "id": 3,
        "name": "Tanni",
        "adress": "Essex"
    }
]

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/student/:id', (req, res) => {
    let result = datas.filter(function(stud){return stud.id == req.params.id});
    res.json(result);
    console.log(result);
});

app.listen(port, (err) => {
    if(err)
    console.log("Server failed to start");
    else
    console.log(`Server started at http://localhost:${port}`);
});