var fishmouse = document.getElementById("fish");
let element;
let rect; 
let garbages; 
let cord ;
let timer;

document.addEventListener("mousemove",movement); 

function movement(e) {
  
  var x = e.clientX;
  var y = e.clientY;

  if (y < 80 || y > 430 || x < 156 || x > 750) {
    return;
  }

  fishmouse.style.left = x + "px";
  fishmouse.style.top = y + "px";

};

const particles = document.getElementById("particle");

function randomImage() {
  
  particles.innerHTML ='';
    const img = [
    "chips-removebg-preview.png",
    "bottle-removebg-preview.png",
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
  console.log("pos",pos);
  document.getElementById("garbage").style.marginTop = pos + "px";
  
}

function isCollide(){
  
  element = document.getElementById("fish");
  rect = element.getBoundingClientRect();

  garbages = document.getElementById("garbage");
  if(!garbages){
    return false;
  }
  cord = garbages.getBoundingClientRect();

  return !((rect.bottom < cord.top ) || (rect.top>cord.bottom) || (rect.right < cord.left ) || (rect.left > cord.right ))
}

function game(){
  if(isCollide()){
    console.log("Game over");
    // alert("game over");
  }
  // else{
  //   score=score+5;
  //   console.log("score = ",score);
    
  // }
}

function startGame(){
  let score=0;
  setInterval(function(){
    score=score+5;
    console.log("score = ",score);
  },2700);
  setInterval(game,300);

  setInterval(randomImage,2000);
  
  setInterval(getImagePosition,2000);
  
}

startGame();
