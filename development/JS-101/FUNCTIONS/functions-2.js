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


