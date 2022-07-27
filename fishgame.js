var fishmouse = document.getElementById("fish");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  if (y < 80 || y > 430 || x < 156 || x > 750) {
    // console.log("----", x);
    return;
  }

  fishmouse.style.left = x + "px";
  fishmouse.style.top = y + "px";

  const element = document.getElementById("fish");
  const rect = element.getBoundingClientRect();

  
    console.log("fish ----- "+"right: " +
    rect.right.toFixed() +
    ", Top: " +
    rect.top.toFixed() +
    ", bottom: " +
    rect.bottom.toFixed() +
    ", Left: " +
    rect.left.toFixed());
});

const particles = document.getElementById("particle");

function Image() {
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

  const pos = Math.floor(Math.random() * 450) + 70;
  console.log(pos)
  document.getElementById("garbage").style.marginTop = pos + "px";

  const garbages = document.getElementById("particle");
  const cord = garbages.getBoundingClientRect();
   console.log(" garbage -----"+"right: " +
    cord.right.toFixed() +
    ", Top: " +
    cord.top.toFixed() +
    ", bottom: " +
    cord.bottom.toFixed() +
    ", Left: " +
    cord.left.toFixed());
    //  Image();
}

Image();


