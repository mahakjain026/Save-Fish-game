function Image() {
  const img = [
    "chips-removebg-preview.png",
    "bottle-removebg-preview.png",
    "bottle2-removebg-preview.png",
    "can_bottle-removebg-preview.png",
  ];

  const bg = img[Math.floor(Math.random() * img.length)];
  const image = document.createElement("img");
  image.setAttribute('src', `${bg}`);
  image.setAttribute('height', 60);
  image.setAttribute('id','garbage')

  const particles = document.getElementById("particle");
  particles.appendChild(image);



const pos=Math.floor(Math.random() * (450) ) + 70;

console.log(pos);
 document.getElementById("garbage").style.marginTop = pos+"px";
}
Image();
getParticles();

var fishmouse = document.getElementById('fish');
document.addEventListener('mousemove', function(e){
  var x= e.clientX;
  var y= e.clientY;
  fishmouse.style.left=x+ 'px';
  
fishmouse.style.top=y+'px';

});

