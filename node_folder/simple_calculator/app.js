const url = require('url');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));


app.get('/calculate', (req, res) => {

    const operation = req.query.operation;
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    let answer = 0;
    switch (operation) {
        case "add":
            answer = parseFloat(num1) + parseFloat(num2);
            break;

        case "subtract":
            answer = parseFloat(num1) - parseFloat(num2);
            break;

        case "divide":
            answer = parseFloat(num1) / parseFloat(num2);

            break;
        case "multiply":
            answer = parseFloat(num1) * parseFloat(num2);
            break;
        default:
            res.redirect("/");
            break;
    }

    res.send(`The Answer is: ${answer} <br/><br/>
    <div><a href="${req.protocol}://${req.hostname}:${port}">Another calculation</div>`)

});

app.get('/*', (req, res) => {
    res.sendFile('node_folder/simple_calculator/public/index.html', { root: '.' });
});


// PORT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

