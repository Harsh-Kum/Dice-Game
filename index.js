let random1 = Math.floor(Math.random()*6)+1;
let random2 = Math.floor(Math.random()*6)+1;
let randomDice = "images/dice" + random1 + ".png";
let randomDice2 = "images/dice" + random2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDice);
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);
if(random1 > random2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (random1==random2){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins";
} 