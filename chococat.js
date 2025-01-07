function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  

  
  stroke(0,0,0);
  fill(0,0,0);
  //ears
  strokeWeight(40);
  strokeJoin(ROUND);
  triangle(234, 218, 210, 105, 425, 205);
  triangle(270, 218, 500, 100, 470, 205);
  fill(254, 232, 169);
  stroke(254, 232, 169);
  triangle(257, 218, 228, 133, 331, 205);
  triangle(305, 218, 477, 133, 450, 205);
  stroke(0,0,0);
  fill(0,0,0);
  //face
  strokeWeight(1);
  ellipse(350,250,300,270);
  fill(255);
  circle(275,270,70);
  circle(420,270,70);
  fill(156,104,61);
  ellipse(350,310,30,25);
  fill(0,0,0);
  circle(290,270,25);
  circle(407,270,25);
  fill(0,0,0);

 
  //arc(435, 200, 100, 250, PI, 0);
 //whiskers
  noFill();
  strokeWeight(8);
  arc(518, 295, 120, 30, PI, TWO_PI);
  arc(168, 295, 120, 30, PI, TWO_PI);
  arc(508, 325, 100, 20, TWO_PI, PI);
  arc(188, 325, 100, 20, TWO_PI, PI);
  
  //neck thing
  noFill();
  stroke(104, 163, 215);
  strokeWeight(20);
  arc(350, 380, 140, 20, TWO_PI, PI);

}
