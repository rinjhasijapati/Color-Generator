const colors = ["blue", "magenta", "#ff5050", "rgb(102, 255, 102)", "#6600ff"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]; //sets the body color 
    color.textContent = colors[randomNumber]; //sets the name of the color
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}