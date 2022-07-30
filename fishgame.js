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

  //  element = document.getElementById("fish");
  // rect = element.getBoundingClientRect();

  // console.log(
  //   "fish ----- " +
  //     "right: " +
  //     rect.right.toFixed() +
  //     ", Top: " +
  //     rect.top.toFixed() +
  //     ", bottom: " +
  //     rect.bottom.toFixed() +
  //     ", Left: " +
  //     rect.left.toFixed()
  // );
  // game();
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
  i.setAttribute("height", 100);
  i.setAttribute("id", "garbage");
  particles.appendChild(i);
 
}


function getImagePosition() {
  const pos = Math.floor(Math.random() * 450) + 70;

  document.getElementById("garbage").style.marginTop = pos + "px";
  
  
}




//   function getcorrdinate(){
  //   //  garbages = document.getElementById("garbage");
  //   //  cord = garbages.getBoundingClientRect();
  
  
  //        console.log(" garbage -----" +
//         "right: " +
//         cord.right.toFixed() +
//         ", Top: " +
//         cord.top.toFixed() +
//         ", bottom: " +
//         cord.bottom.toFixed() +
//         ", Left: " +
//         cord.left.toFixed());
// }


function isCollide(){
  element = document.getElementById("fish");
  rect = element.getBoundingClientRect();

  garbages = document.getElementById("garbage");
  if(!garbages){
    return false;
  }
  cord = garbages.getBoundingClientRect();

  return !((rect.bottom < cord.top ) || (rect.top>cord.bottom) || (rect.right < cord.left ) || (rect.left > cord.rightx ))
}

function game(){
  if(isCollide()){
    console.log("true");
  }
  else{
    console.log("false")
  }
}

function startGame(){

  setInterval(game,300);

  setInterval(randomImage,2000);

  setInterval(getImagePosition,2000);

}

startGame();
