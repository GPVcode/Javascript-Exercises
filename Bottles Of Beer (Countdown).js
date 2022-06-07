// Hello CPU, set initial arbitrary variable to initial amount of beers
var beersOnTheWall = 100;

// We'll need two variables as we are using two different numbers in our song. Set this new value to it's own unique arbitrary variable.
var newBeersOnTheWall = 99;

// CPU, let's use a while loop for our countdown
while(beersOnTheWall >= 0 && newBeersOnTheWall >= 0) { // If these two conditions are true, CPU, please run the code within curly brackets

    // CPU, please set the following two arbitrary values into two unique variables that will ensure grammatical correctness and style in our countdown simulation. 
    var bottleWord = "bottles"; // please note that the value in these variables are arbitrary bc they will be updated to different characters as certain conditions meet.
    var newBottleWord = "bottles"; // please note that newBottleWord variable will be updated twice for values 1(singular word) and 0("No more").

    // CPU, if newBeersOnTheWall equals zero, please update its value from 0 to the phrase "no more" bc it sounds cooler.
    if (newBeersOnTheWall === 0) {
        newBeersOnTheWall = "no more";
    }
    // CPU, if beersOnTheWall equals 1, please update variable bottleWord to singular "bottle" for proper grammar.
    else if (beersOnTheWall === 1) {
        bottleWord = "bottle";
    }
    // CPU, if newBeersOnTheWall equals 1, please update the value of newBottleWord to singular "bottle" for proper grammar.
    else if (newBeersOnTheWall === 1) {
        newBottleWord = "bottle";
    }   
    // after the loop, CPU, please console.log(print) the following output. Numbers should change followed by the appropriate grammar in the concatenated sentence relative to the number of beers we are at. 
    console.log(beersOnTheWall + " " + bottleWord + " of beer on the wall, " + beersOnTheWall + " " + bottleWord + " of beer. Take one down and pass it around, " + newBeersOnTheWall + " " + newBottleWord + " of beer on the wall.");
    beersOnTheWall--; //subtract beersOnTheWall value by 1 after each loop and console.log(print)
    newBeersOnTheWall--;//subtract newBeersOnTheWall by 1 after each loop and console.log(print)

}
