// First we declare array beginning with the first two values of the fibonacci sequence

let fibonacci = [0,1];

// We begin at array index 1 and push current index + previous index to the array
function listFibonacci(num) {
    for (let i = 1; i < num; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }
    console.log(fibonacci);
}

listFibonacci(100);
