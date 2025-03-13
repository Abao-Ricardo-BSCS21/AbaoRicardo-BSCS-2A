var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Aim, Ready, Fire! (Enter Guess Number 0 - 6)");

    if (guess < 0 || guess > 6) {
        alert("Please Enter a Valid Cell Number!");
    } else {
        guesses = guesses + 1; 

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit!");

            if (hits == 3) {
                isSunk = true;
                alert("You Sank my BattleShip!");
            }
        } else {
            alert("Miss!");
        }
    }
}

alert("Game over! It took you " + guesses + " guesses." + "and your accuracy is : "+(3/guesses));