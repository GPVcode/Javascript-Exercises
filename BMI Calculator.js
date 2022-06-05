
// bmi CALCULATOR WITH USER FEEDBACK
//Set up function called bmiCalculator using inputs weight and height
function bmiCalculator (weight, height) {
    var bmi = weight/(height*height); // this is the formula for BMI stored inside variable called bmi
    if (bmi < 18.5){ //if else conditions to give user feedback based on the BMI calculated from their inputs
        return("Your BMI is " + bmi + ", so you are underweight.")
    } else if (bmi >= 18.5 && bmi <= 24.9){
        return("Your BMI is " + bmi + ", so you have a normal weight.")
    } else{
        return("Your BMI is " + bmi + ", so you are overweight.")
    }
}

//NOTES: we can, but aren't using alert, prompt, or console.
