let currentHedline = "News in the world today"
const currentArticle = "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium qui nihil voluptatem quaerat doloribus unde suscipit omnis quia quibusdam velit saepe, perspiciatis magnam dolorum distinctio nisi doloremque sed laborum sunt."

const isFakeNews = false; 
const amountOfWords = 957;

if (currentHedline.length > 15) {
    currentHedline = currentHedline.substring(0, 15) + "...";
}

console.log("Nology Post 2024")
console.log(`Headline: ${currentHedline}`)
console.log(currentArticle);

function getPost() {
    //Get your post in here...
}
