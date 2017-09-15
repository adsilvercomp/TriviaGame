//onload function displays a play button, which calls question 1 from the game object
window.onload = function() {
    $('#display').html('<span id="play">play</span>')
    $('#play').click(game.start);

}

//the variable clockRunning is a flag that will prevent the clock from being sped up unnecessarily
var clockRunning = false;
//global variables
var counter;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var question;
var a;
var b;
var c;
var d;
var userGuess;





//this is the game object, which controls the timer as well as the trivia questions.
var game = {
    time: 20,
    aTime: 10,

    //this function calls the function Q1 every second.
    start: function() {
        if (!clockRunning) {
            clockRunning = true;
            counter = setInterval(game.Q1, 1000);
        }



    },
    //this function subtracts game.time by one (20 times) every time it is called and displays the current game.time in the UI.
    //it also asks the first multiple choice question and links the question, asnwers and timer to the user Interface.
    //it then calls answer1 every second.
    Q1: function() {
        //this decrements game.time by 1 every second
        game.time--;

        $('#display').on("click", "#a", function() {
            userGuess = true;
            correct++;
            game.stop();
            counter = setInterval(game.answer1, 1000);
        });

        $('#display').on("click", "#b", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer1, 1000);
        });

        $('#display').on("click", "#c", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer1, 1000);
        });

        $('#display').on("click", "#d", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer1, 1000);
        });

        //if the timer hits 0, the stop function is called, and answer 1 is called every second.
        if (game.time === 0) {
            userGuess = false;
            game.stop();
            unanswered++;
            counter = setInterval(game.answer1, 1000);
        }



        //this is printing out on the user interface. 
        question = "Who wrote the Rite of Spring?"
        a = "Stravinsky";
        b = "Bach";
        c = "Mozart";
        d = "Brahms";
        game.interface();
    },




    //this function displays the correct answer for each question
    answer1: function() {

        //this decrements game.aTime by 1 every second
        game.aTime--;
        //if the user guesses the correct answer display the word "correct" and a picture of the composer.
        if (userGuess === true) {
            var answer =
                "<h1>" + "Correct, Igor Stravinsky wrote the Rite of Spring" + "</h1>" + "<br/>" +
                "<img src='assets/images/stravinsky.jpg'/>"

            $('#display').html(answer);
        }
        //if the user guesses the incorrect answer, display the word incorrect and a picture of the correct composer. 
        if (userGuess === false) {
            var answer =
                "<h1 class='wrong'>" + "Wrong, Igor Stravinsky wrote the Rite of Spring" + "</h1>" + "<br/>" +
                "<img src='assets/images/stravinsky.jpg'/>"

            $('#display').html(answer);
        }

        if (game.aTime === 0) {
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q2, 1000);
        }

    },

    Q2: function() {
        //this decrements game.time by 1 every second
        game.time--;

        $('#display').on("click", "#a", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer2, 1000);
        });

        $('#display').on("click", "#b", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer2, 1000);
        });

        $('#display').on("click", "#c", function() {
            userGuess = true;
            correct++;
            game.stop();
            counter = setInterval(game.answer2, 1000);
        });

        $('#display').on("click", "#d", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer2, 1000);
        });

        //if the timer hits 0, the stop function is called, and answer 1 is called every second.
        if (game.time === 0) {
            userGuess = false;
            game.stop();
            unanswered++;
            counter = setInterval(game.answer2, 1000);
        }


        //this is printing out on the user interface. 
        question = "Who wrote the Magic Flute?"
        a = "Haydn";
        b = "Bach";
        c = "Mozart";
        d = "Ligeti";
        game.interface();

    },


    answer2: function() {

        game.aTime--;

        // if user is right, increment correct, display it to the user
        // else incorrect++ display 


        //if the user guesses the correct answer display the word "correct" and a picture of the composer.
        // if (userGuess === correct) {
        game.aTime--;
        //if the user guesses the correct answer display the word "correct" and a picture of the composer.
        if (userGuess === true) {
            var answer =
                "<h1>" + "Correct, Mozart wrote the Magic Flute" + "</h1>" + "<br/>" +
                "<img src='assets/images/mozart.jpg'/>"

            $('#display').html(answer);
        }
        //if the user guesses the incorrect answer, display the word incorrect and a picture of the correct composer. 
        if (userGuess === false) {
            var answer =
                "<h1 class='wrong'>" + "Wrong, Mozart wrote the Magic Flute" + "</h1>" + "<br/>" +
                "<img src='assets/images/mozart.jpg'/>"

            $('#display').html(answer);
        }

        if (game.aTime === 0) {
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q3, 1000);
        }

    },

    Q3: function() {
        //this decrements game.time by 1 every second
        game.time--;

        $('#display').on("click", "#a", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer3, 1000);
        });

        $('#display').on("click", "#b", function() {
            userGuess = true;
            correct++;
            game.stop();
            counter = setInterval(game.answer3, 1000);
        });

        $('#display').on("click", "#c", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer3, 1000);
        });

        $('#display').on("click", "#d", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer3, 1000);
        });

        //if the timer hits 0, the stop function is called, and answer 1 is called every second.
        if (game.time === 0) {
            userGuess = false;
            game.stop();
            unanswered++;
            counter = setInterval(game.answer3, 1000);
        }


        //this is printing out on the user interface. 
        question = "Who wrote the Moonlight Sonata?"
        a = "Handel";
        b = "Beethoven";
        c = "Bach";
        d = "Bartok";
        game.interface();

    },


    answer3: function() {

        //if the user guesses the correct answer display the word "correct" and a picture of the composer.
        // if (userGuess === correct) {
        game.aTime--;
        //if the user guesses the correct answer display the word "correct" and a picture of the composer.
        if (userGuess === true) {
            var answer =
                "<h1>" + "Correct, Beethoven wrote the Moonligh Sonata" + "</h1>" + "<br/>" +
                "<img src='assets/images/beethoven.jpg'/>"

            $('#display').html(answer);
        }
        //if the user guesses the incorrect answer, display the word incorrect and a picture of the correct composer. 
        if (userGuess === false) {
            var answer =
                "<h1 class='wrong'>" + "Wrong, Beethoven wrote the Moonlight Sonata" + "</h1>" + "<br/>" +
                "<img src='assets/images/beethoven.jpg'/>"

            $('#display').html(answer);
        }

        if (game.aTime === 0) {
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q4, 1000);
        }

    },

    Q4: function() {
        //this decrements game.time by 1 every second
        game.time--;

        $('#display').on("click", "#a", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer4, 1000);
        });

        $('#display').on("click", "#b", function() {
            userGuess =false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer4, 1000);
        });

        $('#display').on("click", "#c", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer4, 1000);
        });

        $('#display').on("click", "#d", function() {
            userGuess = true;
            correct++;
            game.stop();
            counter = setInterval(game.answer4, 1000);
        });

        //if the timer hits 0, the stop function is called, and answer 1 is called every second.
        if (game.time === 0) {
            userGuess = false;
            game.stop();
            unanswered++;
            counter = setInterval(game.answer4, 1000);
        }


        //this is printing out on the user interface. 
        question = "Who wrote the Goldberg Varitations?"
        a = "Purcell";
        b = "Haydn";
        c = "Handel";
        d = "Bach";
        game.interface();

    },


    answer4: function() {

        //if the user guesses the correct answer display the word "correct" and a picture of the composer.
        // if (userGuess === correct) {
        game.aTime--;
        //if the user guesses the correct answer display the word "correct" and a picture of the composer.
        if (userGuess === true) {
            var answer =
                "<h1>" + "Correct, Bach wrote the Goldberg Variations" + "</h1>" + "<br/>" +
                "<img src='assets/images/bach.jpg'/>"

            $('#display').html(answer);
        }
        //if the user guesses the incorrect answer, display the word incorrect and a picture of the correct composer. 
        if (userGuess === false) {
            var answer =
                "<h1 class='wrong'>" + "Wrong, Bach wrote the Goldberg Variations" + "</h1>" + "<br/>" +
                "<img src='assets/images/bach.jpg'/>"

            $('#display').html(answer);
        }

        if (game.aTime === 0) {
            game.stop();
            game.timeReset();
            counter = setInterval(game.Q5, 1000);
        }

    },

    Q5: function() {
        //this decrements game.time by 1 every second
        game.time--;

        $('#display').on("click", "#a", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer5, 1000);
        });

        $('#display').on("click", "#b", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer5, 1000);
        });

        $('#display').on("click", "#c", function() {
            userGuess = true;
            correct++;
            game.stop();
            counter = setInterval(game.answer5, 1000);
        });

        $('#display').on("click", "#d", function() {
            userGuess = false;
            incorrect++;
            game.stop();
            counter = setInterval(game.answer5, 1000);
        });

        //if the timer hits 0, the stop function is called, and answer 1 is called every second.
        if (game.time === 0) {
            userGuess = false;
            game.stop();
            unanswered++;
            counter = setInterval(game.answer5, 1000);
        }


        //this is printing out on the user interface. 
        question = "Who wrote the German Requiem?"
        a = "Handel";
        b = "Beethoven";
        c = "Brahms";
        d = "Bartok";
        game.interface();

    },


    answer5: function() {

        //if the user guesses the correct answer display the word "correct" and a picture of the composer.
        // if (userGuess === correct) {
        game.aTime--;
        //if the user guesses the correct answer display the word "correct" and a picture of the composer.
        if (userGuess === true) {
            var answer =
                "<h1>" + "Correct, Brahms wrote the German Requiem" + "</h1>" + "<br/>" +
                "<img src='assets/images/brahms.jpg'/>"

            $('#display').html(answer);
        }
        //if the user guesses the incorrect answer, display the word incorrect and a picture of the correct composer. 
        if (userGuess === false) {
            var answer =
                "<h1 class='wrong'>" + "Wrong, Brahms wrote the German Requiem" + "</h1>" + "<br/>" +
                "<img src='assets/images/brahms.jpg'/>"

            $('#display').html(answer);
        }

        if (game.aTime === 0) {
            game.stop();
            game.timeReset();
            game.result();
        }

    },


    //this function is the userInterface that displays when the user is answering questions.
    interface: function() {


        var html =
            "<h1 class = 'question'>" + question + "</h1>" +
            "<div id = 'a' class = 'button'>" + a + "</div>" +
            "<div id = 'b' class = 'button'>" + b + "</div>" +
            "<div id = 'c' class = 'button'>" + c + "</div>" +
            "<div id = 'd' class = 'button'>" + d + "</div>" +
            "<h1 class = 'clock'>" + game.time + "</h1>"

        $('#display').html(html);
    },

    //this function displays the user's results when the game is over and gives them the option to play again.
    result: function() {

        var end =
            "<h1>" + "Correct:" + correct + "</h1>" +
            "<h1>" + "Incorrect:" + incorrect + "</h1>" +
            "<h1>" + "Uanswered:" + unanswered + "</h1>" +
            "<div id='resetGame'>" + "Play Again" + "</div>"

        $('#display').html(end);
    },

    stop: function() {
        clearInterval(counter);
        clockRunning = false;
    },


    timeReset: function() {
        game.time = 20;
        game.aTime = 10;
    },



    //this function resets the game.
    reset2: function() {
        $('#display').on("click", "#resetGame", function() {
            game.start();
        });
    }
}












//create game object that includes functions for StartTimer, decrement, reset, and questions