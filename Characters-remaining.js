//we can calculate characters used by the user.
var tweet = prompt("Compose your tweet:");
//Counting the length of user input
var remaining = 140 - tweet.length;
//Or you can use alert
console.log("You have written " + tweet.length + " characters, you have " + remaining + " characters left available.");
