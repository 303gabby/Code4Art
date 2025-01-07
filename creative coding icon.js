function setup() {
  createCanvas(500, 300);
  background(255,255,255);
}

function draw() {
/* outer ear*/
  if(mouseY > 150){
    background(25,87,199);
  stroke(0,0,0);
  fill(0,0,0);
ellipse(180,105,90,70);
ellipse(320,105,90,70);
  fill(255,255,255);
  /*inner ear*/
  fill(0,0,0);
ellipse(208,118,105,63);
ellipse(293,118,105,63);
  fill(255,255,255);
  /* head */
ellipse(250,165,205,175);
  fill(255,255,255);
    /* nose-mouth area*/
  fill(0,0,0);
triangle(270,182,230,182,250,205);
line(250,205,250,215);
  line(250,215,265,215);
  line(250,215,235,215);
    /* eye spot*/
  fill(0,0,0);
ellipse(208,145,49,69);
ellipse(290,145,49,69);
     /* inner eye*/

  fill(255,255,255);
ellipse(208,145,22,22);
ellipse(290,145,22,22);
  
     /* inner-inner eye*/
/*ellipse(208,145,2,10);
ellipse(290,145,2,10);*/
  fill(0,0,0);
ellipse(208,145,12,12);
ellipse(290,145,12,12);
  
   /* if(mouseIsPressed){
    fill(0,0,0);
ellipse(208,145,22,22);
ellipse(290,145,22,22);
  }*/
  /*cheeks*/
  stroke(255,228,225);
  fill(255,228,225);
ellipse(185,190,22,5);
ellipse(312,190,22,5);
  } else{
  
  
background(255,228,225);
   /* bear transition outer ear*/
  /*stroke(139,69,19);*/
  stroke(0,0,0);
  fill(139,69,19);
  ellipse(180,105,90,70);
  ellipse(320,105,90,70);
     /* bear transition inner  ear*/
 /* stroke(139,69,19);*/
    stroke(0,0,0);
  fill(218,160,109);
 ellipse(208,118,105,63);
ellipse(293,118,105,63);
   /* bear transition head*/
  stroke(139,69,19);
  stroke(0,0,0);
  fill(218,160,109);
  ellipse(250,165,205,175);
  
  /* bear eyes*/
  stroke(0,0,0);
  fill(0,0,0);
ellipse(208,145,12,12);
ellipse(290,145,12,12);
  
  /* darker circle area*/ 
  
fill(196,164,132);
  ellipse(250,205,80,80);
  /*nose-mouth area*/
   fill(0,0,0);
triangle(270,182,230,182,250,205);
line(250,205,250,215);
  line(250,215,265,215);
  line(250,215,235,215);
  }
  console.log(`mouse X: ${mouseX}`);

  console.log(`mouse Y: ${mouseY}`);
  
}
