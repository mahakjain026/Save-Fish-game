var fishmouse = document.getElementById("fish");
let element;
let rect;
let garbages;
let cord;
let timer;

document.addEventListener("mousemove", movement);
function getScoreFromLS(){
  return localStorage.getItem('scoreObj')
}
function setScoreFromLS(scorePara){
  localStorage.setItem('scoreObj', scorePara)
}
function movement(e) {
  var x = e.clientX;
  var y = e.clientY;

  if (y < 80 || y > 430 || x < 156 || x > 750) {
    return;
  }

  fishmouse.style.left = x + "px";
  fishmouse.style.top = y + "px";
}

const particles = document.getElementById("particle");

function randomImage() {
  particles.innerHTML = "";
  const img = [
    "chips-removebg-preview.png",
    // "bottle-removebg-preview.png",
    "bottle2-removebg-preview.png",
    "can_bottle-removebg-preview.png",
  ];

  let bg = img[Math.floor(Math.random() * img.length)];
  let i = document.createElement("img");
  i.setAttribute("src", `${bg}`);
  i.setAttribute("height", "70");
  i.setAttribute("id", "garbage");
  particles.appendChild(i);
}

function getImagePosition() {
  const pos = Math.floor(Math.random() * 360) + 200;
  console.log("pos", pos);
  document.getElementById("garbage").style.marginTop = pos + "px";
  // console.log("margin---",document.getElementById("garbage").style.marginTop)
}

function isCollide() {
  element = document.getElementById("fish");
  rect = element.getBoundingClientRect();

  garbages = document.getElementById("garbage");
  if (!garbages) {
    return false;
  }
  cord = garbages.getBoundingClientRect();

  return !(
    rect.bottom < cord.top ||
    rect.top > cord.bottom ||
    rect.right < cord.left ||
    rect.left > cord.right
  );
}

let updateScore = document.getElementById("score");
let score = -5;

function calScore() {
  score = score + 5;
  setScoreFromLS(score);
  updateScore.innerText = "score : " + score;

  // console.log("score");
}



function game() {
  if (isCollide()) {
    gameOver();
  }
  
}
let claScoreInteval
let randomImgInteval
let gameInteval
let imgPosInteval

function startGame() {
  claScoreInteval = setInterval(calScore, 2000);

  gameInteval = setInterval(game, 300);

  randomImgInteval = setInterval(randomImage, 2000);

  imgPosInteval = setInterval(getImagePosition, 2000);
}

function clearGame(){
  console.log("in clear")
  clearInterval(gameInteval)
  clearInterval(claScoreInteval)
  clearInterval(randomImgInteval)
  clearInterval(imgPosInteval)
}
function playAgain() {
  window.location.href = "/index.html";
}


function gameOver(isOver){
  clearGame()
  console.log("score==",score);
  window.location.href="/index3.html";
   
}

function showScore(){
  let finalScoreValue = getScoreFromLS()
  let finalscore=document.querySelector(".sc");
  finalscore.innerHTML=`score : ${finalScoreValue}`;
}
 function changespeed()
  {
 if(a<score && score<a+40 && t> 0.5)
 
{
a=a+40;
t=t-0.2;
t2=t2-200;
console.log("a----",a);
 console.log("t------",t);
 document.getElementById("particle").style.animationDuration = `${t}s`;
}
//  $('#particle').css("animation-duration", "5s");

}

