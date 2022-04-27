let cloud1 = 50
let cloud2 = 250

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(72,209,204);
  
  noStroke();
  fill(255,140,0);
  fill(255,140,0);
  circle(320,380,390);
  //landscape3
  
   noStroke();
  fill(255,140,0);
  fill(255,140,0);
  circle(100,380,390);
  //landscape2
  
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
  fill(154,205,50);
  fill(154,205,50);
  circle(200,400,390);
  //landscape1
  
  noStroke();
  fill('yellow');
  fill(255,215,0);
  circle(350,50,50);
  //sun
  
  textSize(50);
  noStroke();
  fill('white');
  text ("☁", cloud1,100);
  cloud1 = cloud1 + 0.1;
  
  if (cloud1 > 400) {
    cloud1 = -50
  }
  textSize(50);
  noStroke();
  fill('white');
  text ("☁", cloud2,100);
  cloud2 = cloud2 + 0.1;
  
  if (cloud2 > 400) {
    cloud2 = -50   
  }
}