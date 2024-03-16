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
function getLastNames([name1, name2, name3]){
   let array = [name1, name2, name3];
   return array[2];
} 
console.log(getLastNames(["Bukayo", "Fisher", "Saka"]));
console.log(getLastNames(["Rowland", "Hudson", "Knowles"]));
console.log(getLastNames(["Cooper", "Downey Jr", "Perry"]));


//5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.
function allNumbersPositive(num1, num2, num3){
    let array = [num1, num2, num3];

    for (let index = 0; index < array.length; index++){
        if(array[index] >= 0){
            continue;
        } else{
            return false;
        }
    }
    return true;
}
console.log(allNumbersPositive(1, 6, -5));
console.log(allNumbersPositive(7, 6, 5));
console.log(allNumbersPositive(-5, 2, -9));



