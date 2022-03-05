function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question prototype
Question.prototype.checkAnswer = function (answer) {

    return this.answer === answer;

};

// Quiz Constructor
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// Quiz Prototype
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
};

// Quiz isFinish
Quiz.prototype.isFinish = function () {
    return this.questions.length === this.questionIndex;
};

// Quiz guess
Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();

    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
};


var q1 = new Question("What do Nate, Sully and Elena set out to find in Uncharted: Drake's Fortune ?", ["Atlantis", "Henry Avery's treasure", "El Dorado", "Heaven"], "El Dorado");

var q2 = new Question("What city does Nate search for in Uncharted 2: Among Thieves ?", ["El Dorado", "Shambhala", "Atlantis", "Babylon"], "Shambhala");

var q3 = new Question("Where is Nate at the start of Uncharted 2: Among Thieves ?", ["In the middle of the Sahara Desert", "Stranded at sea", "At home with Elena", "Hanging over a cliff in a train"], "Hanging over a cliff in a train");

var q4 = new Question("What game do Nate and Elena play in Uncharted 4 ?", ["Far Cry", "Crash Bandicoot", "No Man's Sky", "The Legend of Zelda"], "Crash Bandicoot");

var q5 = new Question("What is Libertalia ?", ["A pirate colony", "A small town in America", "Te village where Tenzin lives", "A country"], "A pirate colony");

var q6 = new Question("Who rescued Nate after the train crash ?", ["Tenzin", "Elena", "Sully", "Chloe"], "Tenzin");

var q7 = new Question("What clue does Nate start with to solve the Marco Polo mystery ?", ["Sir Francis Drake's ring", "An oil lamp in a museum", "Marco Polo's journal", "Marco Polo's house"], "An oil lamp in a museum");

var q8 = new Question("What did Nate and Sam's mother do for a living?", ["She was a historian", "An oil lamp in a museum", "She was a thief", "She was a doctor"], "She was a historian");

var questions = [q1, q2, q3, q4, q5, q6, q7, q8];

// Start Quiz

var quiz = new Quiz(questions);

loadQuestion();


// Answer Image
var gamePic = [
    {
        name: 'The Search for El Dorado',
        image: 'img/q1.png'

    },

    {
        name: 'Shambhala',
        image: 'img/q2.png'
    },

    {
        name: 'Hanging over a cliff in a train',
        image: 'img/q3.png'
    },


    {
        name: 'Crash Bandicoot',
        image: 'img/q4.png'
    },


    {
        name: 'A pirate colony',
        image: 'img/q5.png'
    },

    {
        name: 'Tenzin',
        image: 'img/q6.png'
    },

    {
        name: 'An oil lamp in a museum',
        image: 'img/q7.png'
    },

    {
        name: 'She was a historian',
        image: 'img/q8.png'
    }

];


var index = 0;
var slideCount = gamePic.length;

function showSlide(i) {

    index = i;


    if (i < 0) {
        index = slideCount - 1;
    }

    if (i >= slideCount) {
        index = 0;
    }

    document.querySelector('container mt-3, .card-title-2').textContent = gamePic[index].name;

    document.querySelector('container mt-3, .card-img-top-2').setAttribute('src', gamePic[index].image);

    index++;

    document.querySelector("container mt-3, .card-title-3").textContent = "Did you know the previous question?";
}


function loadQuestion() {

    if (quiz.isFinish()) {
        showScore();

    } else {

        var question = quiz.getQuestion();
        var choices = question.choices;

        document.querySelector('#question').textContent = question.text;

        for (var i = 0; i < choices.length; i++) {

            var element = document.querySelector('#choice' + i);

            element.innerHTML = choices[i];
            guess('btn' + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id) {

    var btn = document.getElementById(id);

    btn.onclick = function () {

        quiz.guess();

        loadQuestion();
        showSlide(index);

    };
}


function showScore() {
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML = html;
}

function showProgress() {

    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionIndex + 1;
    var html = 'Question ' + questionNumber + ' of ' + totalQuestion;

    if (totalQuestion === questionNumber) {

        document.querySelector('#progress').innerHTML = "Quiz is Ended";
    } else {
        document.querySelector('#progress').innerHTML = html;
    }
}