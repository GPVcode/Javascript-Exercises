/*This is my original version without the prompt
//setting function myBMI using weight and height input
function myBMI(weight, height){
    //Set rounded answer of the BMI formula and store this value in variable called BMI
    var BMI = Math.round(weight/(height*height));
    //printingconcatenated for developer observing.
    console.log("Based on your height, your BMI is " + BMI + ".");
}

//Calling on weight(kg) and height(cm) of function myBMI
myBMI(300, 60);

*/

//The follow code is my work in response to a prompt

//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height){
    //returning the calculation of BMI and rounding the answer.
    return Math.round(weight/(height*height));
}
// Storing the function in a variable named bmi
var bmi = bmiCalculator(weight, height);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
