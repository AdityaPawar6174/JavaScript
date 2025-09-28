// rest operator --> (...rest) allow a function work with a variable
//                    number of arguments by bundlng them into an array

function openFridge(...foods)
{
    console.log(...foods);
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "hot dog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);