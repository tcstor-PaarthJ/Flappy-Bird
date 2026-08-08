// defining variables:
// block, player, and hole
var block1 = document.getElementById("block");
var hole = document.getElementById("hole");
var player = document.getElementById("player");
var score = 0;
var jumping = 0;
var speedY = 0;

// making the hole appear in a random spot

function randomHole() {
  let random = -(Math.random() * 300 + 150);
  hole.style.top = random + "px";
  score++;
  console.log(score);

}

hole?.addEventListener("animationiteration", randomHole);
// setting the top of the player and pushes it down by 3px 

function update() {
  let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
  var cTop = -(500-playerTop);
  var blockLeft = parseInt(window.getComputedStyle(block1).getPropertyValue("left"));
  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  
  let touchingBlock = false;
  let lessThanHole = false;
  let birdBottom = false;
  // console.log(blockLeft)
  
  // if(){
    
  // }
  // if(birdBottom == true){

  // }

  // if((blockLeft < 20) && (blockLeft > -50)) {
    
  // }
  
  if (playerTop > 480 || (blockLeft < 20 && blockLeft > -50 && (cTop < holeTop || cTop > holeTop + 130))) {
    resetGame();
    return;
  }

  // // player.style.top = (playerTop + 3) + "px";
  // if(jumping = 1){
  //   player.style.top = (playerTop + 3) + "px";
  // }

  speedY -= 0.025;

  player.style.top = (playerTop - speedY) + "px";


  // var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  // var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  // var cTop = -(500-playerTop);
  // if((playerTop > 480) || ((blockLeft < 20) && (blockLeft > -50)) ){}
}

var updateInterval = setInterval(update, 10);

document.addEventListener("click", (event) => { });
function jump() {
  speedY = 1.5;

  // jumping = 1;
  // let jumpCount = 0;
  // var jumpInterval = setInterval(function (){
  //   let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
  //     player.style.top = (playerTop - 5) + "px";
  //   if(jumpCount > 20){
  //     clearInterval(jumpInterval);
  //     jumpCount = 0;
  //   }
  //   jumpCount = jumpCount + 1;
  //   }, 10);

  // jumping = 0;
}

function resetGame() {
  player.style.top = 100 + "px";
  speedY = 0;

  block1.getAnimations().forEach((anim) => {
    anim.cancel();
    anim.play();
  })
  hole.getAnimations().forEach((anim) => {
    anim.cancel();
    anim.play();
  })

  randomHole();
  score = 0;
}

