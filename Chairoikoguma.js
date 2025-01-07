function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  stroke(42, 13, 4);
  strokeWeight(6);
  //ears
   fill(158, 81, 40);
  circle(140,185,120);
  circle(450,185,120);
  //head
  fill(158, 81, 40);
  ellipse(300,300,380,310);
  strokeWeight(3);
  //eyes
  fill(42, 13, 4);
  circle(205,310,40);
    circle(395,310,40);
  //nose/mouth area
fill(254);
  stroke(255);
  ellipse(300,367,130,90);
   stroke(42, 13, 4);
  fill(42, 13, 4);
  circle(300,360,25);
  strokeWeight(6);
  noFill();
  arc(280,375,35,20,0,PI);
  arc(320,375,35,20,0,PI);
}
