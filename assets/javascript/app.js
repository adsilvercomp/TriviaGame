//onload function displays a play button, which calls question 1 from the game object
window.onload = function(){
	$('#display').html('<span id="play">play</span>')
	$('#play').click(game.start);

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
		

	//this function calls the function Q1 every second.
	start: function(){
		if (!clockRunning) {
        clockRunning=true;
        counter=setInterval(game.Q1, 1000);
      }

      

	},
	//this function subtracts game.time by one every time it is called and displays the current game.time in the UI.
	//it also asks the first multiple choice question and links the question, asnwers and timer to the user Interface.
	Q1: function(){
		//this decrements game.time by 1 every second
		game.time--;


		//console.log should print only when clicked, but it is printing every time the function is called by start.
		if($('.a').click())
      	{
      	console.log("this is working");
	     }

	    //this is printing out on the user interface. 
		question = "Who wrote the Rite of Spring?"
      a= "Stravinsky";
      b= "Bach";
      c= "Mozart";
      d= "Brahms";
      game.interface();

      	
      	//if the timer hits 0, the stop function is called, and answer 1 is called.
	     if(game.time===0){
	     	game.stop();
	     	unanswered++;
	     	game.answer1();
	     }
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
		

		var html= 
				  "<h1 class = 'question'>" + question + "</h1>" +
				  "<div class = 'a'>" + a + "</div>"+
				  "<div class = 'b'>" + b + "</div>"+
				  "<div class = 'c'>" + c + "</div>"+
				  "<div class = 'd'>" + d + "</div>"+
				  "<h1 class = 'clock'>" + game.time + "</h1>" 

		$('#display').html(html);		  
	},			

	//this function displays the correct answer for each question
	answer1: function(){
			//if the user guesses the correct answer display the word "correct" and a picture of the composer.
				if(correct===1){
					var answer=
					 "<h1>" + "Correct, Igor Stravinsky wrote the Rite of Spring" + "</h1>" + "<br/>"+
					 "<img src='assets/images/stravinsky.jpg'/>"

				$('#display').html(answer);
				}
			//if the user guesses the incorrect answer, display the word incorrect and a picture of the correct composer. 
				if(incorrect===1 || unanswered===1){
					var answer=
					 "<h1 class='wrong'>" + "Wrong, Igor Stravinsky wrote the Rite of Spring" + "</h1>" + "<br/>"+
					 "<img src='assets/images/stravinsky.jpg'/>"

				$('#display').html(answer);	 
				}

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