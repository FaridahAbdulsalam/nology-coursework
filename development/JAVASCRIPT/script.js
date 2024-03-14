function calculateYearsUntilRetirement(event){
    const currentAge = event.target.value;

    let retireAge = 65 - currentAge

    alert(`You can retire in ${retireAge} years`)
}

