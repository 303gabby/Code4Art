function setup() {
  createCanvas(850, 1000);
  background("white");
}

function draw() {
  //SANRIO- MELODY
  //inspo pic: https://www.sanriodeals.com/wp-content/uploads/2022/07/272931-Zoom.2_1080x1080.jpg
  
  // Draw the face
  //stroke("black")
 // strokeWeight(1)
//  fill("yellow");
//  circle(200, 200, 250);

  //main body
 strokeWeight(5)
  fill(255,255,255);
  triangle(100,600, 250,250,400,600)
  //hood pt2
   fill(255,111,165);
  triangle(100,450,250,200,190,450);
  triangle(300,450,250,200,390,450);
  
  //head 
  strokeWeight(5)
  //hood/hat 
  fill(255,111,165);
  //ears
  //left ear
  ellipse(197,200,110,350);
  //right ear 
  ellipse(330,200,120,175);
  
  //hat
  ellipse (250,300,325,238);
  //face
  fill(255,255,255);
  ellipse (250,348,250,140);

  //eyes 
  // Draw the eyes
  fill(0,0,0);
  ellipse(180, 330, 15,25);
  ellipse(315, 330, 15,25);


    //mouth 

    // Draw the mouth
 
 
   noFill();
  arc(250, 387, 48, 18, 0, PI);

  //nose
  fill(255,191,0);

  ellipse(250,375,25,15)

//right ear flap
  fill(255,111,165);
  arc(322, 175, 101, 150, 0, PI);

  
  strokeWeight(3)

 

  //bow
 strokeWeight(5)
  fill(125,249,255);
  //knot and ribbon
  //right
   arc(170,200,50,60,PI,0);
   arc(170,200,50,50,0,PI);
  //left
   arc(125,220,50,60,PI,0);
   arc(125,220,50,50,0,PI);
  //knot
  circle(150,205,20);
  
 
  

 

  //arms and hands 
  //left
  fill(255,255,255);
  strokeWeight(5)
  line(125,450,90,495);
  arc(85,527,65,65,0,radians(270));

  //right

   line(370,450,415,495);
  arc(420,527,65,65,radians(270),PI);

//feet 
strokeWeight(5)

  //left foot 
  ellipse(130,570,83,89);
  //inner 
  fill(252,234,248);
  strokeWeight(3)
  ellipse(130,580,30,40);
  circle(130,545,15);
  circle(108,554,15);
  circle(152,554,15);


strokeWeight(5)
  //right foot
   fill(255,255,255);
   ellipse(380,570,83,89);
 //inner 
  fill(252,234,248);
  strokeWeight(3)
  ellipse(380,580,30,40);
  circle(380,545,15);
  circle(358,554,15);
  circle(402,554,15);

  //extra flower
  //stalk
  fill(50,205,50);
  rect(490,500,15,100);
  //petals
  fill(255,255,255);
  //top
   arc(500,480,60,60,PI,0);
  //bottom
   arc(500,520,50,50,0,PI);
  //right
   arc(520,500,60,60,PI,0);
   arc(520,500,60,50,0,PI);
  //left
   arc(480,500,50,60,PI,0);
   arc(480,500,50,50,0,PI);
  
  //middle
  fill(255,191,0);
  circle(500,500,20);
}
