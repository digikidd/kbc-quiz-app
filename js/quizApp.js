/**
 * Created by kellycarmichael on 6/18/16.
 */


//**************************************************//
// Global variables and objects instantiated here. //
//************************************************//
var counter = 0;
var usrAnswer = null;
var usrName = "";
var secondsRemain = 15;
var rightAnswers = 0;
var wrongAnswers = 0;
var outOfTime = false;
var numberOfQuestions = 0;
var question = null;
var timerInterval = null;
//var answer = null;

//**********************************************//
//   Functions Section                         //
//********************************************//


//This resets globals and flags for new game.
function initialize() {
    counter = 0;
    secondsRemain = 15;
    rightAnswers = 0;
    wrongAnswers = 0;
    outOfTime = false;
    usrAnswer = null;
    numberOfQuestions = 0;
    document.getElementById('out-of-time').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
}

//getting user name in this function and calling the loading game function. The text input and submit are also hidden in here.
function getName() {
    usrName = document.getElementById('user-name').value;
    loadingGameIntro();
    document.getElementById('user-name').style.display = 'none';
    document.getElementById('name-btn').style.display = 'none';
}

//This function will kick things off!
function startGame() {
    displayQuestion();
}

//Randomly selects questions from the questions object.
var getRandomQuestion = function (questions) {
    var question = questions[Math.floor(Math.random() * questions.length)];
    while (question.hasAppeared) {
        question = questions[Math.floor(Math.random() * questions.length)];
    }
    question.hasAppeared = true;
    return question;
};

//Include questions for quiz in here!!!
function displayQuestion() {
    document.getElementById('timer').style.display = 'block';
    document.getElementById('out-of-time').style.display = 'none';
    document.getElementById('gameboard').style.display = 'block';
    question = getRandomQuestion(questions);
    var arrayLength = question.options.length;
    document.getElementById("answers").innerHTML = "";
    document.getElementById('question').innerHTML = question.musicQuestion;
    for (var i = 0; i < arrayLength; ++i) {
        LI = document.createElement('li');
        LI.setAttribute("id", i);
        LI.innerHTML = question.options[i];
        document.getElementById('answers').appendChild(LI);
    }
    pickAnswer();
    startTimer();
}

//This function evaluates the click events when a question is displayed and a user chooses an answer.
function pickAnswer() {
    document.getElementById('0').addEventListener('click', function () {
        usrAnswer = 0;
        nextQuestion(question.answer);
    });
    document.getElementById('1').addEventListener('click', function () {
        usrAnswer = 1;
        nextQuestion(question.answer);
    });
    document.getElementById('2').addEventListener('click', function () {
        usrAnswer = 2;
        nextQuestion(question.answer);
    });
    document.getElementById('3').addEventListener('click', function () {
        usrAnswer = 3;
        nextQuestion(question.answer);
    });
}

//This function shows a new question and tracks the number of right and wrong answers.
function nextQuestion(answer) {
    if (numberOfQuestions === 10) {
        finalScore();
    }
    else if (answer === usrAnswer) {
        ++rightAnswers;
        document.getElementById('right-answer').style.display = 'block';
        document.getElementById('right-answer').innerHTML = "You got it right!!";
        outOfTime = true;
        displayQuestion();
    }
    else if (answer != usrAnswer) {
        ++wrongAnswers;
        clearInterval(timerInterval);
        document.getElementById('right-answer').style.display = 'none';
        document.getElementById('wrong-answer').style.display = 'block';
        document.getElementById('wrong-answer').innerHTML = "The correct answer is: " + question.options[answer];
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('next-btn').innerHTML = 'click to continue';
        document.getElementById("answers").innerHTML = "";
        document.getElementById('next-btn').addEventListener('click', function () {
            outOfTime = true;
            displayQuestion();
            document.getElementById('next-btn').style.display = 'none';
            document.getElementById('wrong-answer').style.display = 'none';
        });
    }
    ++numberOfQuestions;
    if (numberOfQuestions === 10) {
        document.getElementById('timer').style.display = 'none';
        finalScore();
    }
}

//Function to start timer for each question.
function startTimer() {
    if (outOfTime) {
        clearInterval(timerInterval);
        secondsRemain = 15;
        outOfTime = false;
    }
    timerInterval = setInterval(function () {
        if (secondsRemain > 9) {
            document.getElementById('timer').innerHTML = 'time remaining: ' + secondsRemain;
        }
        else {
            document.getElementById('timer').innerHTML = 'time remaining: 0' + secondsRemain;
        }
        --secondsRemain;
        if (secondsRemain === -1) {
            secondsRemain = 15;
            clearInterval(timerInterval);
            document.getElementById('timer').style.display = 'none';
            document.getElementById('out-of-time').style.display = 'block';
            document.getElementById('out-of-time').innerHTML = "Time is up!!";
            outOfTime = true;
            usrAnswer = 5;
            nextQuestion(question.answer);
        }
    }, 1000)
}

function stopTimer (timerInterval) {
    clearInterval(timerInterval);
}

//function to display loading game info. this function will display user name and show some loading dialogue for interactive value.
function loadingGameIntro() {
    var loadInterval = setInterval(function () {
        document.getElementById('player-name').innerHTML = 'Starting up the Music IQ app!!';
        document.getElementById('adding-elements').innerHTML = usrName + ' good luck to you and hold on a sec while the app finishes...';
        ++counter;
        switch (counter) {
            case 1:
                document.getElementById('music-questions').innerHTML = "loading the music questions.";
                break;
            case 2:
                document.getElementById('music-questions').style.display = 'none';
                document.getElementById('genres').innerHTML = "loading the genres.";
                break;
            case 3:
                document.getElementById('genres').style.display = 'none';
                document.getElementById('songs').innerHTML = "loading the songs.";
                break;
            case 4:
                document.getElementById('songs').style.display = 'none';
                document.getElementById('artists').innerHTML = "loading the artists.";
                break;
            case 5:
                document.getElementById('artists').style.display = 'none';
                document.getElementById('musical-instruments').innerHTML = "loading musical instruments.";
                document.getElementById('musical-instruments').style.display = 'none';
                document.getElementById('player-name').style.display = 'none';
                document.getElementById('adding-elements').style.display = 'none';
                document.getElementById('starting').innerHTML = "Ok...Music IQ is starting now...good luck!";
                break;
            case 6:
                document.getElementById('starting').style.display = 'none';
                clearInterval(loadInterval);
                $('#load-modal').modal('hide');
                startGame();
                break;
        }
    }, 1600)
}

//This function is called after 10 questions have been answered and displays the final score for the user.
function finalScore() {
    document.getElementById("answers").innerHTML = "";
    document.getElementById('question').innerHTML = "";
    document.getElementById('wrong-answer').style.display = 'none';
    document.getElementById('right-answer').style.display = 'none';
    document.getElementById("answers").innerHTML = "";
    document.getElementById('question').innerHTML = "";
    document.getElementById('final-answer').innerHTML = usrName + ", your final score:";
    document.getElementById('final-right').innerHTML = rightAnswers + " correct answers!";

    document.getElementById('final-wrong').innerHTML = wrongAnswers + " incorrect answers.";
    document.getElementById('reset-game').innerHTML = "click to reset game";
    document.getElementById('reset-game').addEventListener('click', function () {
        window.location.reload();
    });
}



document.getElementById('gameboard').style.display = 'none';
document.getElementById('name-btn').addEventListener('click', function () {
    initialize();
    getName();
});