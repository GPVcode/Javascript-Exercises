// establish function usign age as input
function lifeInWeeks(age) {
    // convert years to days and store in numbeOfDays variable
    var numberOfDays = 90 * 365;
    // convert years to weeks and store in numberOfWeeks variable
    var numberOfWeeks = 90 * 52;
    // convert years to months and store in numberOfMonths variable
    var numberOfMonths = 90 * 12;

    // subtract from 90 years lifespan in days by current age in days, and store inside variable named daysRemaining
    var daysRemaining = numberOfDays - (age*365);
    // subtract from 90 years lifespan in weeks by current age in weeks, and store inside variable named weeksRemaining
    var weeksRemaining = numberOfWeeks - (age*52);
    // subtract from 90 years lifespan in months by current age in months, and store in variable named monthsRemaining
    var monthsRemaining = numberOfMonths - (age*12);

    //print specific string to communicate with user the amount of day, weeks, and months remain,
    console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks, and " + monthsRemaining + " left.");

    
}

//input your age
lifeInWeeks(7);
