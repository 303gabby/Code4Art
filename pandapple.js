function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background(225,255,255);
  //ears
  fill(0,0,0);
  circle(180,190,100);
  circle(520,190,100);
 
  strokeWeight(8);
  
  fill(255);
  stroke(0,0,0);
  strokeWeight(8);
  //head
  rect(177,155,350,250,120);
  strokeWeight(2);
  fill(0,0,0);
  //nose
  ellipse(350,310,30,19);
  
  //eyes
  ellipse(260,300,45,60);
  ellipse(440,300,45,60);
  fill(255);
  //pupils
  circle(260,293,18);
  circle(440,293,18);
  //blush
  fill(247, 154, 185);
  noStroke();
  ellipse(260,357,60,35);
   ellipse(440,357,60,35);
  
   //hat
  strokeWeight(8);
  fill(239,71,73);
  stroke(0,0,0);
  arc( 350,233,337,200,PI, TWO_PI);
  line(188,233,513,233);
  noFill();
  arc( 366,320,28,20,TWO_PI, PI);
  arc( 332,320,28,20,TWO_PI, PI);
  arc(296, 123, 70, 50, PI + QUARTER_PI, TWO_PI);
  fill(107,187,75);
  arc( 405,130,145,90,PI, TWO_PI);
  arc( 393,130,120,70,TWO_PI,PI);
  line(455,130,477,130);
  
}
