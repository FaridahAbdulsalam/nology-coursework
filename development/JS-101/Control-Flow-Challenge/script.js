function checkNumber(event){
    let number = event.target.value;

    if(number >= 0){
        console.log("This is a positive number");
    } else{
        console.log("This is a negative number");
    }
}

function calculateDaysLeft(event){
   let day = event.target.value;
   day = day.toLowerCase();

    switch(day) {
        case "monday":
            console.log("You have 4 days until the weekend")
            break;
        case "tuesday":
            console.log("You have 3 days until the weekend")
            break;
        case "wednesday":
            console.log("You have 2 days until the weekend")
            break;
        case "thursday":
            console.log("You have 1 days until the weekend")
            break;
        case "friday":
            console.log("You have 0 days until the weekend!")
            break;
        case "saturday":
        case "sunday":
            console.log("YAY! Its the weekend!")
            break;
        default:
            console.log("Sorry we don't recognise that day")
    }

}
