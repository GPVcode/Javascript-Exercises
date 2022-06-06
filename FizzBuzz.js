// Use a for loop to achieve FizzBuzz solution:
for (var i=1; i < 101; i++) { // for variable i, as long as value i is less than 101, add 1 and loop through from 1-100
    if (i % 15 == 0) console.log("FizzBuzz"); //if i is divisible by 15, log fizzBuzz
    else if (i % 3 == 0) console.log("Fizz"); // if i is divisible by 3, log Fizz
    else if (i % 5 == 0) console.log("Buzz"); // if is divisible by 5, log Buzz
    else console.log(i); //everything else, call on i and start loop once more
}

//Loop stops one i > 100
