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
function getLargestNumber(num1, num2, num3){

    if(num1 > num2 && num1 > num3){
        return num1 + " is the largest number";
    } 
    else if(num2 > num1 && num2 > num3){
        return num2 + " is the largest number";
    } 
    else if(num3 > num1 && num3 > num2){
        return num3 + " is the largest number";
    } else {
        return "All numbers are the same";
    }
}
console.log(getLargestNumber(3, 6, 9));
console.log(getLargestNumber(2, 4, 6));
console.log(getLargestNumber(10, 100, 1000));


//4. Write a function that takes an array of names and returns the last name from the array of names.
const names = ["Kay", "Vanessa", "Katherine"];
const colours = ["Pink", "Grey", "White"];
// console.log(names[2]);

for (let index = 2; index < names.length; index++){
    console.log(colours[index])
} 


//5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.