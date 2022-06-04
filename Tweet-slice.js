//capture user's input into a const called tweet
const tweet = prompt("Compose your tweet:");
// slice the tweet and keep the characters betwwe 0-140; store this winthin varable tweet under 140
var tweetUnder140 = tweet.slice(0,140);

// Display user input. Any characters past 140 characters will be cut off and not included in the message.
alert(tweetUnder140);
