// **Challenge**
//1. Write a function to find the perimiter of a rectangle.
function handlePerimeterCalculation(){
    let length = 12;
    let width = 6;
    let perimeter = (length + width)*2;

    console.log(perimeter)
}

//2. Write a function to find the area of a circle. When given a radius, print the area to the console.
function handleRadiusCalculation(){
    let radius = 8;
    let pi = Math.PI;
    let area = pi *(radius ** 2);

    console.log(area);
}

//3. Now do the same to find the circumefrence of a circle...
function handleCircumferenceCalculation(){
    let radius = 10;
    let pi = Math.PI;
    let circumefrence = 2 * (pi * radius);

    console.log(circumefrence);
}