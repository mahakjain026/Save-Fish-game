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
const movingImage = document.querySelector('.fish');

//when the user presses any key, the 'document.body.onkeydown' function is called
//move the image inside that function
document.body.onkeydown = (e) => {
  //handle the moving of image
  //e has a property called key which states the name of the key pressed
  
  switch(e.key){
    case 'ArrowUp':
      movingImage.offsetTop--;
      break;
      case 'ArrowLeft':
      movingImage.offsetLeft--;
      break;
      case 'ArrowRight':
      movingImage.offsetTop++;
      break;
      case 'ArrowDown':
      movingImage.offsetLeft++;
      break;
  }
}

