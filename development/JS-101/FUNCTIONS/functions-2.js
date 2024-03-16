//Write a function named getDescription that:
//Takes 4 arguments: number of children, oartners name, geographic location, job title.
//Outputs your statement to the console like so: "I am currently X living in Y, and married to Z with N kids."
//Call that function 3 times with 3 different valuse for the arhuments.

const getDescription = (amountOfChildren, partner, location, jobTitle) =>{
    const message = `I am currently a ${jobTitle} living in ${location} , married to ${partner} with ${amountOfChildren} kids`;
    
    console.log(message);
}

getDescription(4, "Khalil", "Kent", "Chef")
getDescription(2, "Sade", "Canada", "Engineer")
getDescription(0, "Trey", "London", "Laywer")

//**The Lifetime Supply of Snickers**

//Write a function named calculateSuply that:
//takes 2 arguments: age, amount per day.
//calculates the amount consumed for the rest of your life (based on const max age).
//outputs the result to the console like so: "You will need X to last you until the age of Y"
//Call that function 3x, diff values each time
//Bonus: Accept floating point values for amount per dat, and round the result to a round number

const calculateSupply = (currrentAge, amountOfSnickersPerDay) => {
    const maxAge = 90;
    let averageConsumption = (amountOfSnickersPerDay * 365);
    let lifetimeIntake = averageConsumption * maxAge;
    let currentIntake = averageConsumption * currrentAge;
    let averageSupply = lifetimeIntake - currentIntake;

    const message = `You will need  ${averageSupply} Snickers to last you until the age of ${maxAge}`

    console.log(message);
}

calculateSupply(28, 4);
calculateSupply(28, 2.5);
calculateSupply(28, 12);

