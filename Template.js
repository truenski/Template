const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();

PORT = 3000;

let users = [{
    name: 'carlo',
    age: 18
},
{ name: 'igo', age: 28 },
{ name: 'kesney', age: 20 }];


app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render('templetes', {
        PORT,
        users
    })
});
app.get("/bla", (req, res) => {
    res.render('./bla/ble')
});

    app.listen(PORT, () => {
        console.log('Ta indo')
    });

