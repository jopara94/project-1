//Brand name drugs
let brandCards = ["Tylenol", "Advil", "Cresemba", "Robitussin", "Benadryl", "Mucinex", "You Win!"];
//Generic name drugs
const genCards1 = "Acetaminophen";
const genCards2 = "Ibuprofen";
const genCards3 = "Isavuconazonium";
const genCards4 = "Dextromethorphan";
const genCards5 = "Diphenhydramine";
const genCards6 = "Guaifenesin";

//Setting the cards in their divs
document.getElementById("questionBox").innerText = brandCards[0];
document.getElementById("a1").innerText = genCards1;
document.getElementById("a2").innerText = genCards2;
document.getElementById("a3").innerText = genCards3;
document.getElementById("a4").innerText = genCards4;
document.getElementById("a5").innerText = genCards5;
document.getElementById("a6").innerText = genCards6;

//Score
let score = 0;
document.querySelector("#showScore").innerText = `${score} Points`;//Showing initial score


//if user clicks the correct answer, the card turns green and disappears. If wrong, it stays white.

//Clicking the cards
function clickACard (evt) {
    if (evt.target.id === "a1" && brandCards[0]==="Tylenol") {
        evt.target.style.backgroundColor = "green";
        brandCards.shift();
        setTimeout( function () {document.getElementById("questionBox").innerText = brandCards[0];
        score += 1;
        document.querySelector("#showScore").innerText = `${score} Points`;
        document.querySelector("#a1").style.display = "none"}, 500);
    }; 
    if (evt.target.id === "a2" && brandCards[0]==="Advil") {
    evt.target.style.backgroundColor = "green";
    brandCards.shift();
    setTimeout( function () {document.getElementById("questionBox").innerText = brandCards[0];
    score += 1;
    document.querySelector("#showScore").innerText = `${score} Points`;
    document.querySelector("#a2").style.display = "none"}, 500);
};  

if (evt.target.id === "a3" && brandCards[0]==="Cresemba") {
    evt.target.style.backgroundColor = "green";
    brandCards.shift();
    setTimeout( function () {document.getElementById("questionBox").innerText = brandCards[0];
    score +=1;
    document.querySelector("#showScore").innerText = `${score} Points`;
    document.querySelector("#a3").style.display = "none"}, 500);
}; 

if (evt.target.id === "a4" && brandCards[0]==="Robitussin") {
    evt.target.style.backgroundColor = "green";
    brandCards.shift();
    setTimeout( function () {document.getElementById("questionBox").innerText = brandCards[0];
    score += 1;
    document.querySelector("#showScore").innerText = `${score} Points`;
    document.querySelector("#a4").style.display = "none"}, 500);
}; 

if (evt.target.id === "a5" && brandCards[0]==="Benadryl") {
    evt.target.style.backgroundColor = "green";
    brandCards.shift();
    setTimeout( function () {document.getElementById("questionBox").innerText = brandCards[0];
    score += 1;
    document.querySelector("#showScore").innerText = `${score} Points`;
    document.querySelector("#a5").style.display = "none"}, 500);
}; 

if (evt.target.id === "a6" && brandCards[0]==="Mucinex") {
    evt.target.style.backgroundColor = "green";
    brandCards.shift();
    setTimeout( function () {document.getElementById("questionBox").innerText = brandCards[0];
    score += 1;
    document.querySelector("#showScore").innerText = `${score} Points`;
    document.querySelector("#a6").style.display = "none";
    document.querySelector("#text1").style.display = "none"
    document.querySelector("#text2").style.display = "none"}, 500);};
};
//As the user mouses over the card choices, the cards turn yellow, then back to white
function colorChange(e) {
    e.target.style.backgroundColor = "yellow";
    setTimeout( function () {e.target.style.backgroundColor = "white"}, 200);
};
//Changing card colors
document.getElementById("a1").addEventListener("mouseover", colorChange);
document.getElementById("a2").addEventListener("mouseover", colorChange);
document.getElementById("a3").addEventListener("mouseover", colorChange);
document.getElementById("a4").addEventListener("mouseover", colorChange);
document.getElementById("a5").addEventListener("mouseover", colorChange);
document.getElementById("a6").addEventListener("mouseover", colorChange);
document.getElementById("choices").addEventListener("click", clickACard); 
