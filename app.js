//cards
const brandCards = ["Tylenol", "Advil", "Mucinex", "Robitussin", "Benadryl", ];

const genCards1 = "Acetaminophen";
const genCards2 = "Ibuprofen";
const genCards3 = "Guaifenesin";
const genCards4 = "Dextromethorphan";
const genCards5 = "Diphenhydramine";

//score
let score = 0;
document.querySelector("#showScore").innerHTML = `${score} Points`;
//click
var chosenCard = "";
var questionCard = brandCards[0];
//if clickedCard = the proper questionCard, background color green. If wrong, red for 1 second, then back to white.

function clickACard (evt) {
    if (evt.target.querySelector("#a1") && brandCards[0]==="Tylenol") {
        evt.target.style.backgroundColor = rgba(0, 0, 255, 0.4);
        brandCards.shift();
        score += 1;
} else if (evt.target.querySelector("#a2") && brandCards[0]==="Advil") {
    evt.target.style.backgroundColor = rgba(0, 0, 255, 0.4);
    brandCards.shift();
    score += 1;
} else if (evt.target.querySelector("#a3") && brandCards[0]==="Mucinex") {
    evt.target.style.backgroundColor = rgba(0, 0, 255, 0.4);
    brandCards.shift();
    score +=1;
} else if (evt.target.querySelector("#a4") && brandCards[0]==="Robitussin") {
    evt.target.style.backgroundColor = rgba(0, 0, 255, 0.4);
    brandCards.shift();
    score += 1;
} else if (evt.target.querySelector("#a5") && brandCards[0]==="Benadryl") {
    evt.target.style.backgroundColor = rgba(0, 0, 255, 0.4);
    brandCards.shift();
    score += 1;
//Winning the game
if (score === '5') {
    //You Win modal pops up but alert for now
    alert("You Win!");
}