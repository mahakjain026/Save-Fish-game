// let fish=document.querySelector('.fish');
// let moveby=10;



// window.addEventListener('load',() =>
// {
//     circle.style.position='absolute';
//     circle.style.left=0;
//     circle.style.top=0;


// });
// window.addEventListener('keyup',(e) =>
// {
//     switch(e.key){
//         case 'ArrowLeft':
//       fish.style.left=parseInt( fish.style.left)-moveby + 'px';
//       break;
//       case 'ArrowRight':
//     fish.style.left=parseInt( fish.style.left)+ moveby + 'px';
//     break;
//      case 'ArrowUp':
//   fish.style.top=parseInt( fish.style.left)-moveby + 'px';
//   break;
//     case 'ArrowDown':
//      fish.style.top=parseInt( fish.style.left)+moveby + 'px';
//      break;
//     }
// });

var fishmouse = document.getElementById('fish');
document.addEventListener('mousemove', function(e){
  var x= e.clientX;
  var y= e.clientY;
  fishmouse.style.left=x+ 'px';

  fishmouse.style.top=y+'px';



});

function Image(){
    const img= [
      "/chips-removebg-preview.png",
      "/fish.png",
    ];

    const bg = img[Math.floor(Math.random() * img.length)];
    document.getElementById("chips").innerHTML = `url(${bg})`;
  
}

