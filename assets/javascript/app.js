//onload function displays a play button, which class question 1 from the game object
window.onload = function(){
	$('#display').html('<span id="play">play</span>')
	$('#play').click(game.StartTimer);

}

//the variable clockRunning is a flag that will prevent the clock from being sped up unnecessarily
var clockRunning = false;
//global variables
var counter;
var correct;
var unanswered;

//this is the game object, which controls the timer as well as the trivia questions.
var game ={

		time:20,
		

	//this function calls the function calls the function decrement every second.
	StartTimer: function(){ 
		//  TODO: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        clockRunning=true;
        counter=setInterval(game.decrement,1000);
      }


	},
	//this function subtracts game.time by one every time it is called and displays the current game.time in the UI.
	decrement: function(){
		game.time--;

		$('#display').html(game.time);		
	},

	stop: function(){
		clearInterval(counter);
		clockRunning=false;
	}

	

}

//create game object that includes functions for StartTimer, decrement, reset, and questions