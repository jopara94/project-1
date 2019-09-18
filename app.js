//cards
const brandCards = ["Tylenol", "Advil", "Mucinex", "Robitussin", "Benadryl"];

const genCards1 = "Acetaminophen";
const genCards2 = "Ibuprofen";
const genCards3 = "Guaifenesin";
const genCards4 = "Dextromethorphan";
const genCards5 = "Diphenhydramine";
//score
let score = ``;
document.querySelector("#showScore").innerHTML = `${score} Points`;
//click
var clickedCard = "";
var questionCard = brandCards[0];
//if clickedCard = the proper questionCard, background color green. If wrong, red for 1 second, then back to white.

//Winning the game
if (score === '5') {
    //You Win modal pops up
}