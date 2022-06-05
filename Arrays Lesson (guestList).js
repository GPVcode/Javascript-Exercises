// Array is a selection of collected items - in this case, names.
var guestList = ["Angela", "Gelo", "Lamelo", "ZO", "Zinger", "Ponso"];
// This will prompt an input from the user.
var guestName = prompt("What is your name?")

// This codes calls on guestList to make sure that the input guestName matches any of the properties in the guestList array
if (guestList.includes(guestName)) { // .includes is in the boolean class of properties
    alert("Welcome");
} 
else {
    alert("You aren't on the guestlist");
}

// conclusion: if user input matches names i the array, the code will dentify whether match is true or false and provide feedback to user.
