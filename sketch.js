let playerX = 200;
let playerY = 200;
let targetX = 50;
let targetY = 50;
let playerRadius = 25;
let targetSpeed = 1;
let score = 0;
let enemyX = 200;
let enemyY = 200;

function setup() {
  createCanvas(400, 400);
  noStroke();
 
  drawBackground('🧙‍♂️');
}

function draw () {
  if(playerX + playerRadius >= targetX && playerX - playerRadius <= targetX && playerY + playerRadius >= targetY && playerY - playerRadius <= targetY)  {
    score = score + 1;
    console.log('your score is', score);
    targetX = Math.random() * width;
    targetY = Math.random() * height;
    
    
    // drawBackground('🧙‍♂️');
  } else {
    // drawBackground('🧙‍♂️');
  }
  
  text('🐙', targetX, targetY)
  circle(targetX, targetY, 10);
  fill(32,178,170);
  
  
  noStroke();
  circle(playerX, playerY, playerRadius * 2);
  fill(127,255,0);
  
targetX = targetX + getMovementAmount();
targetY = targetY + getMovementAmount();
  
enemyX = enemyX + getMovementAmount();
enemyY = enemyY + getMovementAmount();
  
  
  
  
  if(keyIsDown(LEFT_ARROW)) {
    playerX = playerX - 5;
  }
    
    if(keyIsDown(RIGHT_ARROW)) {
    playerX = playerX + 5;
  }
  
  if(keyIsDown(UP_ARROW)) {
    playerY = playerY - 5;
  }
  
  if(keyIsDown(DOWN_ARROW)) {
    playerY = playerY + 5;
  }
}

function mouseClicked() {
  drawBackground('🧙‍');
}
function drawBackground(backgroundText) {
  background('white'); 
  
 for(let count = 1; count < 10; count = count * 2) {
    text(backgroundText, Math.random() * width, Math.random() * height);
  }
}

function getMovementAmount() {
  let randomNumber = Math.random ();
  
  if (randomNumber > 0.5) {
//  // move right
    return Math.random() * targetSpeed;
  } else { 
//  // move left
    return Math.random() * targetSpeed * -1;
  }
}