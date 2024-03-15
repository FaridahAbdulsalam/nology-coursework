function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    let retireAge = 65 - currentAge;

    alert(`You can retire in ${retireAge} years`)
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if(greeting =="Hello") {
        alert("Bonjour")
    } else if(greeting == "Goodbye") {
        alert("Au revoir")
    } else {
        alert (`${greeting} is not recognised`)
    }
}

function trackFiveDaily(event) {
    const fruit = event.target.value;
    
    if(fruit == 5){
        alert("You have eaten all your fruits today")
    } else if(fruit != 5 && fruit < 5 && fruit > 0){
        let total = 5 - fruit;
        alert(`You have ${total} more fruits to eat today`)
    } else if(fruit == 0){
        alert("You have eaten no fruits today")
    }else if(fruit <= 8){
        alert(`Wow! You have eaten ${fruit} fruits today! Very healthy`)
    }else if(fruit > 8){
        alert("Be careful not to over do it. Everything in moderation")
    }
    else {
        alert("Value not recognised. Please enter how many fruits you have eaten today")
    }
}