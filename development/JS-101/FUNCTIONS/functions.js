// **Challenge**
//1. Write a function to find the perimiter of a rectangle.
function calculatePerimeter(){
    let length = 12;
    let width = 6;
    let perimeter = (length + width)*2;

    console.log(perimeter)
}

calculatePerimeter();

//2. Write a function to find the area of a circle. When given a radius, print the area to the console.
function calculateRadius(){
    let radius = 8;
    let pi = Math.PI;
    let area = Math.floor(pi *(radius ** 2));

    console.log(area);
}

calculateRadius();

//3. Now do the same to find the circumefrence of a circle...
function calculateCircumference(){
    let radius = 10;
    let pi = Math.PI;
    let circumefrence = Math.floor(2 * (pi * radius));

    console.log(circumefrence);
}

calculateCircumference();