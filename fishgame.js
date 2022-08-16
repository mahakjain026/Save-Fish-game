var fishmouse = document.getElementById("fish");
let element;
let rect;
let garbages;
let cord;
let timer;

document.addEventListener("mousemove", movement1);
document.addEventListener("touchmove", movement);

// function isTouchDevice(){
//   return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
// }

// if(isTouchDevice()===true) {
//   alert('Touch Device'); //your logic for touch device
// }
// else {
//   // alert('Not a Touch Device'); //your logic for non touch device
// }

function getScoreFromLS() {
  return JSON.parse(localStorage.getItem("scoreObj"));
}

function setScoreFromLS(scorePara) {
  // console.log("--------in the set")
  let currentScore = getScoreFromLS();
  if (!currentScore) {
    currentScore = {
      highscore: 0,
      score: 0,
    };
  }
  currentScore["highscore"] =
    currentScore["highscore"] < scorePara
      ? scorePara
      : currentScore["highscore"];
  currentScore["score"] = scorePara;
  localStorage.setItem("scoreObj", JSON.stringify(currentScore));
}

function movement(e) {
  var x = e.touches[0].clientX;
  var y = e.touches[0].clientY;

  if (y < 80 || y > 430 || x < 156 || x > 750) {
    return;
  }

  fishmouse.style.left = x + "px";
  fishmouse.style.top = y + "px";
}

function movement1(e) {
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
if(cord &&cord.left > 150){
  return
}
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

function getImagePosition(n) {
  const pos = Math.floor(Math.random() * 360) + 200;
  // console.log("pos", pos);
  document.getElementById("garbage").style.marginTop = pos + "px";
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
}

function game() {
  if (isCollide()) {
    gameOver();
  }
}
let claScoreInterval;
let randomImgInterval;
let gameInterval;
let imgPosInterval;
let changespeedInterval;

function clearGame() {
  clearInterval(gameInterval);
  clearInterval(claScoreInterval);
  clearInterval(randomImgInterval);
  clearInterval(imgPosInterval);
  clearInterval(changespeedInterval);
}

function playAgain() {
  window.location.href = "/index.html";
}

function replay() {
  window.location.href = "/index2.html";
}

function gameOver(isOver) {
  clearGame();
  window.location.href = "/index3.html";
}

function showScore() {
  let finalScoreValue = getScoreFromLS();
  let gameOverScore = finalScoreValue["score"];
  let gameOverHighScore = finalScoreValue["highscore"];
  let finalHighScore = document.querySelector(".hs");
  finalHighScore.innerHTML = `highscore : ${gameOverHighScore}`;
  let finalscore = document.querySelector(".sc");
  finalscore.innerHTML = `Score : ${gameOverScore}`;
}

var a = 20;
var t = 4;
var t2 = 4000;

function changespeed() {
  if (a >= 20 && t > 1 && t2 > 1000 ) {

      console.log("N----");

    a = a + 20;
    let elem = document.getElementById("particle");
    t = t - 1;
    t = parseFloat(t).toFixed(2);
    t2 = t2 - 1000;
   elem.style.animationDuration = `${t}s`;
    updateGameData();
  }
}

function startGame() {
  document.getElementById("particle").style.animationDuration = `4s`;
  gameInterval = setInterval(game, 300);
  claScoreInterval = setInterval(() => {
    calScore();
    randomImage();
    getImagePosition();
    changespeed();
  }, t2);
}

function updateGameData() {
  clearInterval(claScoreInterval);
  // clearInterval(randomImgInterval);
  // clearInterval(imgPosInterval);
  // clearInterval(changespeedInterval);
  claScoreInterval = setInterval(() => {
    calScore();
    randomImage();
    getImagePosition();
    changespeed();
  }, t2);

  // randomImgInterval = setInterval(randomImage, t2);

  // imgPosInterval = setInterval(getImagePosition, t2);

  // changespeedInterval = setInterval(changespeed,t2);
}
