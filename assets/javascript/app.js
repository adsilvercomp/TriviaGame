//onload function displays a play button, which class question 1 from the game object
window.onload = function(){
	$('#display').html('<span id="play">play</span>')
	$('#play').click(game.Q1);

}

//the variable clockRunning is a flag that will prevent the clock from being sped up unnecessarily
var clockRunning = false;
//global variables
var counter;
var correct=0;
var incorrect=0;
var unanswered=0;
var question;
var a;
var b;
var c; 
var d;

//this is the game object, which controls the timer as well as the trivia questions.
var game ={

		time:20,
		

	//this function calls the function decrement every second.
	//it also asks the first question and links the question, asnwers and timer to the user Interface.
	Q1: function(){
		if (!clockRunning) {
        clockRunning=true;
        counter=setInterval(game.decrement,1000);
      }

      question = "Who wrote the write of spring?"
      a= "Stravinsky";
      b= "Bach";
      c= "Mozart";
      d= "Brahms";
      game.interface();

      if($('#a').click())
      	{
      	console.log("this is working");
	     }

	},
	//this function subtracts game.time by one every time it is called and displays the current game.time in the UI.
	decrement: function(){
		game.time--;

		$('#timer').html(game.time);		
	},

	stop: function(){
		clearInterval(counter);
		clockRunning=false;
	},

	//this function resets the game.
	reset: function (){
		$('#resetGame').click(game.Q1);

	},

	
	//this function is the userInterface that displays when the user is answering questions.
	interface: function(){
		var countDown = "<h1>" + game.decrement + "</h1>" 

		var html= 
				  "<h1>" + question + "</h1>" +
				  "<span class = 'a'>" + a + "</span>"+"<br/>"+
				  "<span class = 'b'>" + b + "</span>"+"<br/>"+
				  "<span class = 'c'>" + c + "</span>"+"<br/>"+
				  "<span class = 'd'>" + d + "</span>"

		$('#display').html(html);		  
	},			 
	//this function displays the user's results when the game is over and gives them the option to play again.
	result: function(){ 

		var end= 
				  "<h1>" + "Correct:" + correct + "</h1>" +
				  "<h1>" + "ncsorrect:" + incorrect + "</h1>" +
				  "<h1>" + "unanswered:" + unanswered + "</h1>" +
				  "<span id='resetGame'>" + "Play Again"  + "</span>"

		$('#display').html(end);		  
	}		 		
	

}

//create game object that includes functions for StartTimer, decrement, reset, and questions