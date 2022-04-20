//let cloud1 = 50
//let cloud2 = 30
//let cloud3 = 70
//let cloud4 = 40
//use these emojis ⭐ 💫 ✨ 😌

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(72,209,204);
  
  fill(255,228,181);
  square(150,120,100);
  //structure
  
  fill(72,209,204);
  square(160,140,20);
  //left window
  
  fill(72,209,204);
  square(220,140,20);
  //right window
  
  fill(139,69,19);
  square(190,180,20);
  //door1
  
  fill(139,69,19);
  square(190,184,20);
  //door2
  
  fill(139,69,19);
  square(160,85,20);
  //chimney1
  
  fill(139,69,19);
  square(160,65,20);
  //chimney2
  
  fill(139,69,19);
  triangle(150,120,250,120,200,50);
  //gable
  
  noStroke();
  fill(255,255,255);
  fill(154,205,50);
  circle(200,400,390);
  //landscape1
}
//if()