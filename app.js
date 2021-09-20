const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

// public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// console.log(static_path);


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing
app.get("", (req, res) => {
    res.render('index')
})

app.get("/library", (req, res) => {
    res.render('library')
})

app.get("/games", (req, res) => {
    res.render('games')
})

app.get("/streams", (req, res) => {
    res.render('streams')
})

app.get("/new", (req, res) => {
    res.render('new')
})

app.get("*", (req, res) => {
    res.render('error')
})


app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})