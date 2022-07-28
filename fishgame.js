var fishmouse = document.getElementById("fish");
// const element = document.getElementById("fish");
// const rect = element.getBoundingClientRect();

document.addEventListener("mousemove",movement); 

function movement(e) {
  var x = e.clientX;
  var y = e.clientY;
  if (y < 80 || y > 430 || x < 156 || x > 750) {
    return;
  }

  fishmouse.style.left = x + "px";
  fishmouse.style.top = y + "px";

  const element = document.getElementById("fish");
  const rect = element.getBoundingClientRect();

  console.log(
    "fish ----- " +
      "right: " +
      rect.right.toFixed() +
      ", Top: " +
      rect.top.toFixed() +
      ", bottom: " +
      rect.bottom.toFixed() +
      ", Left: " +
      rect.left.toFixed()
  );
};


const particles = document.getElementById("particle");

function randomImage() {
  const img = [
    "chips-removebg-preview.png",
    "bottle-removebg-preview.png",
    "bottle2-removebg-preview.png",
    "can_bottle-removebg-preview.png",
  ];

  const bg = img[Math.floor(Math.random() * img.length)];
  const image = document.createElement("img");
  image.setAttribute("src", `${bg}`);
  image.setAttribute("height", 100);
  image.setAttribute("id", "garbage");
  particles.appendChild(image);
}
// console.log("rect -----"+rect);

 randomImage();
function getImage() {
  const pos = Math.floor(Math.random() * 450) + 70;

  document.getElementById("garbage").style.marginTop = pos + "px";
  setInterval(getcorrdinate, 100);

}

getImage();


  function getcorrdinate(){
  const garbages = document.getElementById("garbage");
  let cord = garbages.getBoundingClientRect();
  
    
      " garbage -----" +
        "right: " +
        cord.right.toFixed() +
        ", Top: " +
        cord.top.toFixed() +
        ", bottom: " +
        cord.bottom.toFixed() +
        ", Left: " +
        cord.left.toFixed();
}


function isCollide(movement,getcorrdinate){
  return !((movement.bottom < getcorrdinate.top ) || (movement.top>getcorrdinate.bottom))
}

function game(){
  if(isCollide()){
    console.log("hsxsjsnj");
  }
  else{
    console.log("....")
  }

}

game();
