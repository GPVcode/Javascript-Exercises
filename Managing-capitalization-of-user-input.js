// Ask for user input and store in variable named userNAME
var userName = prompt("What is your name?");

//grab the user input starting from second character in the string, and make the characters lower case; then store this in a varbale called loweruserName
loweruserName = userName.slice(1).toLowerCase();

//grab the first character of the user input and set it to upper case. Then, store this value in a variable named upperuserName
upperuserName = userName.slice(0,1).toUpperCase();

//concatenate upperuserName and loweruserName and store this string inside of a variable named userName
userName = upperuserName + loweruserName;

//call on the message box
alert("Hello " + userName);
