//1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
function isNumberPositive(num){
    if(num >= 0){
        return true;
    } else {
        return false;
    }
}

console.log(isNumberPositive(7));

//2. Write a function that takes a number of days and converts it into an age.
function convertDaysToAge(days){
    let age = days/365

    console.log(age);
}
convertDaysToAge(730);

//3. Write a function that takes three numbers and returns the largest of the three numbers.
//4. Write a function that takes an array of names and returns the last name from the array of names.
//5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.