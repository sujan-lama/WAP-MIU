const express = require('express');
const path = require('path');
const session = require('express-session');
const quizModule = require('./quizModule');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(session({
    "secret": "123",
    saveUninitialized: true,
    resave: false,
}))

app.set('views', path.join(__dirname) + "/views");

app.set('view engine', 'pug');


app.get('/', (req, res) => {
    quizModule.renderViews(req, res);
});

app.post("/", (req, res) => {
    quizModule.checkAnswer(req, res);
});

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});