function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    let retireAge = 65 - currentAge;

    alert(`You can retire in ${retireAge} years`)
}

function getGreetingInFrench(event) {
    const greeting = event.target.value

    if(greeting =="Hello") {
        alert("Bonjour")
    } else if(greeting == "Goodbye") {
        alert("Aurevoir")
    } else {
        alert (`${greeting} is not recognised`)
    }
}