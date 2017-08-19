
//Generates the letter to be guessed 
function generateId() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";
  text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

//instance variables 
var ID = generateId();
var userGuesses = [];
var wins = 0;
var losses = 0;
var numberOfGuesses = 10;

//event listener function... runs when a key is pressed 
document.onkeydown=function(event){
	console.log(event.key);
	var userInput = event.key;

	if(userInput == ID){
		wins = wins + 1;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		document.getElementById("tries").innerHTML = "Tries Remaining: " + numberOfGuesses;
		document.getElementById("losses").innerHTML = "losses: " + losses;
		if(wins >=5){
			alert("Congratulations! You're a Psychic.")
			newGame();
		}
		reset();
	}
	else if(userInput != ID){

		for(var i =0; i < userGuesses.length; i++){
			if(userInput==userGuesses[i]){
				alert("You have already guessed this letter. Guess again.");
				numberOfGuesses++;
			}
		}
		userGuesses.push(userInput);
		numberOfGuesses--;
		document.getElementById("guesses").innerHTML = "Letters Guessed: " + userGuesses;
		document.getElementById("tries").innerHTML = "Tries Remaining: " + numberOfGuesses;
		if(numberOfGuesses == 0){
			losses++;
			if(losses >= 5){
				alert("I'm sorry... You're not a Psychic. Game Over")
				newGame();
			}
			else if(losses<5){
				alert("Try again...");
			}
			document.getElementById("losses").innerHTML = "losses: " + losses;
			reset();
		}
	}
}
	//reset function that resets after every iteration of win/loss
	function reset(){
		numberOfGuesses = 10;
		userGuesses = [];
		ID = generateId();
		document.getElementById("tries").innerHTML = "Tries Remaining: " + numberOfGuesses;
		document.getElementById("guesses").innerHTML = "Letters Guessed: " + userGuesses;	
	}
	//new game function that resets the whole game
	function newGame(){
		wins = 0;
		losses = 0;
		numberOfGuesses = 10;
		userGuesses = [];
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		document.getElementById("losses").innerHTML = "losses: " + losses;
		document.getElementById("tries").innerHTML = "Tries Remaining: " + numberOfGuesses;
		document.getElementById("guesses").innerHTML = "Letters Guessed: " + userGuesses;
	}


console.log(generateId());