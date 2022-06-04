// getMilk is the function and we are using money as input
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  //calculate how my buy limit based off the price of milk($1.50) and money inputted by the call to action below. Assign this value into variable called numberOfBottles
  var numberOfBottles = Math.floor(money / 1.5);
  // plug variable numberOfBottles into string
  console.log("buy " + numberOfBottles + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);
