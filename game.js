//assign userChoice the choice the user picks when prompted
var userChoice = prompt("Do you choose rock, paper or scissors?");

//assign computerChoice a random number
var computerChoice = Math.random();

//assign the random number to rock, paper, or scissors
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

//call function for game to begin
compare(userChoice, computerChoice);

//function compare to decide what wins (according to traditional rules)
var compare = function(choice1, choice2){
    if (choice1 === choice2){
        return "The result is a tie!";
    }
    else if (choice1 === "rock"){
        if (choice2 === "scissors"){
            return "rock wins!";
        }
        else{
            return "paper wins!";
        }
    }    
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            return "paper wins!";
        }
        else{
            return "scissors wins!";
        }
    }    
    else if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return "rock wins!";
        }
        else{
            return "scissors wins!";
        }
    }   
    else{
        return "That's not a valid choice, have you played before?";
    }
};
