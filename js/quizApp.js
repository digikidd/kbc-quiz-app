/**
 * Created by kellycarmichael on 6/18/16.
 */
$ (document).ready (function () {
    // Your code here


//**************************************************//
// Global variables and objects instantiated here. //
//************************************************//
    var counter = 0;
    var usrAnswer = null;
    var usrName = "";
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var numberOfQuestions = 0;
    var question = null;
    var check = null;
    var maxTime = 15;
    var questionTimer = 0;

//**********************************************//
//   Functions Section                         //
//********************************************//

//function to display loading game info. this function will display user name and show some loading dialogue for interactive value.
    function loadingGameIntro () {
        var loadInterval = setInterval (function () {
            document.getElementById ('player-name').innerHTML = 'Starting up the Music IQ QUIZ...';
            document.getElementById ('adding-elements').innerHTML = usrName + ', good luck to you and hold on a sec while the app finishes...';
            ++counter;
            switch (counter) {
                case 1:
                    document.getElementById ('music-questions').innerHTML = "loading the music questions.";
                    break;
                case 2:
                    document.getElementById ('music-questions').style.display = 'none';
                    document.getElementById ('genres').innerHTML = "...loading the genres.";
                    break;
                case 3:
                    document.getElementById ('genres').style.display = 'none';
                    document.getElementById ('songs').innerHTML = "...loading the songs.";
                    break;
                case 4:
                    document.getElementById ('songs').style.display = 'none';
                    document.getElementById ('artists').innerHTML = "...loading the artists.";
                    break;
                case 5:
                    document.getElementById ('artists').style.display = 'none';
                    document.getElementById ('musical-instruments').innerHTML = "...loading musical instruments.";
                    document.getElementById ('musical-instruments').style.display = 'none';
                    document.getElementById ('player-name').style.display = 'none';
                    document.getElementById ('adding-elements').style.display = 'none';
                    document.getElementById ('starting').innerHTML = "Ok...Music IQ is starting now...good luck!";
                    break;
                case 6:
                    document.getElementById ('starting').style.display = 'none';
                    clearInterval (loadInterval);
                    $ ('#load-modal').modal ('hide');
                    startGame ();
                    break;
            }
        }, 900)
    }

//This resets globals and flags for new game.
    function initialize () {
        counter = 0;
        rightAnswers = 0;
        wrongAnswers = 0;
        usrAnswer = null;
        numberOfQuestions = 0;
        document.getElementById ('final-div').style.display = 'none';
        document.getElementById ('out-of-time').style.display = 'none';
        document.getElementById ('next-btn').style.display = 'none';
    }

//getting user name in this function and calling the loading game function. The text input and submit are also hidden in here.
    function getName () {
        usrName = document.getElementById ('user-name').value;
        if (usrName == "") {
            var idx = Math.floor (Math.random () * (10 + 1));
            var tempName = ["50 Cent", "Kelly Clarkson", "Justin Bieber", "Adam Levine", "Eddie Van Halen", "Thomas Rhett", "Taylor Swift", "George Strait", "Snoop Dogg", "Steven Tyler"];
            usrName = tempName[idx];
        }
        loadingGameIntro ();
        document.getElementById ('user-name').style.display = 'none';
        document.getElementById ('name-btn').style.display = 'none';
    }

//This function will kick things off!
    function startGame () {
        displayQuestion ();
        pickAnswer ();
        if (startTimer () == false) {
            console.log ('false');
        }
    }

//Randomly selects questions from the questions.js file..
    var getRandomQuestion = function (questions) {
        var question = questions[Math.floor (Math.random () * questions.length)];
        while (question.hasAppeared) {
            question = questions[Math.floor (Math.random () * questions.length)];
        }
        question.hasAppeared = true;
        return question;
    };

//Display question and possible answers using dynamically created LIs.
    function displayQuestion () {
        startTimer ();
        document.getElementById ('timer').style.display = 'block';
        document.getElementById ('out-of-time').style.display = 'none';
        document.getElementById ('gameboard').style.display = 'block';
        question = getRandomQuestion (questions);
        var arrayLength = question.options.length;
        document.getElementById ("answers").innerHTML = "";
        document.getElementById ('question').innerHTML = question.musicQuestion;
        for (var i = 0; i < arrayLength; ++i) {
            var LI = document.createElement ('li');
            LI.setAttribute ("id", i);
            LI.innerHTML = question.options[i];
            document.getElementById ('answers').appendChild (LI);
        }
    }

//This function evaluates the click events when a question is displayed and a user chooses an answer.
    function pickAnswer () {
        document.getElementById ('0').addEventListener ('click', function () {
            usrAnswer = 0;
            nextQuestion (question.answer);
        });
        document.getElementById ('1').addEventListener ('click', function () {
            usrAnswer = 1;
            nextQuestion (question.answer);
        });
        document.getElementById ('2').addEventListener ('click', function () {
            usrAnswer = 2;
            nextQuestion (question.answer);
        });
        document.getElementById ('3').addEventListener ('click', function () {
            usrAnswer = 3;
            nextQuestion (question.answer);
        });
    }


//This function shows a new question and tracks the number of right and wrong answers.
    function nextQuestion (answer) {

        if (numberOfQuestions === 10) {
            finalScore ();
        }
        else if (answer === usrAnswer) {
            ++rightAnswers;
            ++numberOfQuestions;
            $ ('#correctModal').modal ('show');
            stopTimer ();
            $ ('#correctModal').one ('hidden.bs.modal', function () {
                if (numberOfQuestions != 10) {
                    displayQuestion ();
                    pickAnswer ();
                }
            })
        }
        else if (answer != usrAnswer) {
            ++wrongAnswers;
            ++numberOfQuestions;
            stopTimer ();
            $ ('#incorrectModal').modal ('show');
            $ ('#incorrectModal').one ('hidden.bs.modal', function () {
                document.getElementById ('timer-wrapper').style.display = 'none';
                document.getElementById ('right-answer').style.display = 'none';
                document.getElementById ('wrong-answer').style.display = 'block';
                document.getElementById ('wrong-answer').innerHTML = "The correct answer is: " + question.options[answer];
                document.getElementById ('next-btn').style.display = 'block';
                document.getElementById ('next-btn').innerHTML = 'click to continue';
                document.getElementById ("answers").innerHTML = "";
                document.getElementById ('next-btn').addEventListener ('click', function () {
                    displayQuestion ();
                    pickAnswer ();
                    document.getElementById ('timer-wrapper').style.display = 'block';
                    document.getElementById ('next-btn').style.display = 'none';
                    document.getElementById ('wrong-answer').style.display = 'none';
                })
            })
        }
        if (numberOfQuestions === 10) {
            document.getElementById ('text-timer').style.display = 'none';
            document.getElementById ('timer').style.display = 'none';
            $ ('#correctModal').one ('hidden.bs.modal', function () {
                finalScore ();
            })
            $ ('#incorrectModal').one ('hidden.bs.modal', function () {
                finalScore ();
            })
        }
    }

    //timer that starts when a question gets displayed.
    function startTimer () {
        if (check == null) {
            questionTimer = 0;
            check = setInterval (function () {
                ++questionTimer;
                if (questionTimer > 9) {
                    document.getElementById ('timer').style.color = "#A21318";
                    document.getElementById ('text-timer').innerHTML = "time: ";
                    document.getElementById ('timer').innerHTML = "" + questionTimer;
                }
                else {
                    document.getElementById ('timer').style.color = "springgreen";
                    document.getElementById ('text-timer').innerHTML = "time: ";
                    document.getElementById ('timer').innerHTML = "0" + questionTimer;
                }
                if (questionTimer === maxTime) {
                    stopTimer ();
                    document.getElementById ('timer').style.color = "darkred";
                    document.getElementById ('out-of-time').style.display = 'block';
                    document.getElementById ('out-of-time').innerHTML = "out of time!";
                    document.getElementById ('next-btn').style.display = 'block';
                    document.getElementById ('next-btn').innerHTML = 'click to continue';
                    document.getElementById ('next-btn').addEventListener ('click', function () {
                        displayQuestion ();
                        pickAnswer ();
                        document.getElementById ('timer-wrapper').style.display = 'block';
                        document.getElementById ('next-btn').style.display = 'none';
                        document.getElementById ('wrong-answer').style.display = 'none';
                    })
                    return false;
                }
            }, 1000);
        }
    }

    //stops the timer.
    function stopTimer () {
        clearInterval (check);
        check = null;
    }

//This function is called after 10 questions have been answered and displays the final score for the user.
    function finalScore () {
        stopTimer ();
        document.getElementById ("answers").innerHTML = "";
        document.getElementById ('question').innerHTML = "";
        document.getElementById ('wrong-answer').style.display = 'none';
        document.getElementById ('right-answer').style.display = 'none';
        document.getElementById ('final-div').style.display = 'block';
        document.getElementById ('final-answer').innerHTML = usrName + ", your final score:";
        document.getElementById ('final-right').innerHTML = rightAnswers + " correct answers!";
        document.getElementById ('final-wrong').innerHTML = wrongAnswers + " incorrect answers.";
        if (rightAnswers > wrongAnswers) {
            winnerWinner ();
        }
        document.getElementById ('reset-game').innerHTML = "click to reset game";
        document.getElementById ('reset-game').addEventListener ('click', function () {
            window.location.reload ();
        });
    }

    //function to add winner image to final score.
    function winnerWinner () {
        var elem = document.createElement ("img");
        elem.setAttribute ("src", "images/winner.png");
        elem.setAttribute ("height", "100");
        elem.setAttribute ("width", "100");
        elem.setAttribute ("alt", "Winner");
        document.getElementById ("winner-winner").appendChild (elem);
    }

    document.getElementById ('gameboard').style.display = 'none';
    document.getElementById ('name-btn').addEventListener ('click', function () {
        initialize ();
        getName ();
    });

    document.getElementById ('reset-btn').addEventListener ('click', function () {
        window.location.reload ();
    });
});