const questions = [
    "1, 1, 2, 3, 5", // fibonacci
    "1, 4, 9, 16, 25", // squares
    "2, 3, 5, 7, 11", // primes
    "1, 2, 4, 8, 16", // powers of 2
    "2, 4, 6, 8, 10"
]

const answers = [9, 8, 36, 13, 12];
let question = questions[0];

const defaultResult = {
    score: 0,
    count: 0,
    question: questions[0],
    complete: false
}

function renderViews(req, res) {
    const result = req.session.result ? req.session.result : defaultResult;
    const complete = result.complete ? result.complete : false;
    res.render('index', result);
    if (complete)
        req.session.destroy();
}

function checkAnswer(req, res) {
    //get current score, count and answer
    let score = req.body.score;
    let count = req.body.count;
    let answer = req.body.answer;

    //check answer
    if (parseInt(answer) === answers[parseInt(count)]) {
        score++;
        req.body.score = score;
    }

    //update counts and question
    count++;
    question = questions[count];
    let result = {
        score: score,
        question: question,
        complete: count === answers.length,
        count: count
    };
    req.session.result = result;
    req.session.save();
    res.redirect("/");
};


module.exports = {
    renderViews,
    checkAnswer
}