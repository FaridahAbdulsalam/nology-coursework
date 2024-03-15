// let currentHedline = "News in the world today"
// const currentArticle = "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium qui nihil voluptatem quaerat doloribus unde suscipit omnis quia quibusdam velit saepe, perspiciatis magnam dolorum distinctio nisi doloremque sed laborum sunt."

// const isFakeNews = false; 
// const amountOfWords = 957;

// if (currentHedline.length > 15) {
//     currentHedline = currentHedline.substring(0, 15) + "...";
// }

// console.log("Nology Post 2024")
// console.log(`Headline: ${currentHedline}`)
// console.log(currentArticle);

// function getPost() {
//     //Get your post in here...
// }

//Client Brief...
//Create and application which can be used to keep track 
//of a score in a football match..

//1. It's football there's two teams, so lets keep two scores going 
let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;

//2. When team 1 button us clicked, increment team 1 score
function handleTeamOneClick(){
    teamScoreOne = teamScoreOne + 1;
    
    console.log(teamScoreOne);
}

//3. When team 2 button us clicked, increment team 2 score
function handleTeamTwoClick(){
 teamScoreTwo = teamScoreTwo + 1;
 
 console.log(teamScoreTwo);
}

//4. When do we finish/stop?
function handleStopGame(){
    isGameStopped = true;

    console.log(isGameStopped);
}
