// **Challenge**
//1. Write a function to find the perimiter of a rectangle.
const calculatePerimeter = (width, height) => {
    return (width + height) * 2;
}

console.log(calculatePerimeter(1, 1));

//2. Write a function to find the area of a circle. When given a radius, print the area to the console.
// function calculateRadius(){
//     let radius = 8;
//     let pi = Math.PI;
//     let area = Math.floor(pi *(radius ** 2));

//     console.log(area);
// }

const calculateArea = (radius) =>{
    const area = Math.PI * (radius ** 2);

    return Math.floor(area);
}
console.log(calculateArea(2));

//3. Now do the same to find the circumefrence of a circle...
// function calculateCircumference(){
//     let radius = 10;
//     let pi = Math.PI;
//     let circumefrence = Math.floor(2 * (pi * radius));

//     console.log(circumefrence);
// }

const calculateCircumference = (radius) => {
    return Math.floor(2 * (Math.PI * radius));
}

console.log(calculateCircumference(7));