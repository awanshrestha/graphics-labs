function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  noStroke();
  
  //Red Background
  fill('red');
  triangle(100,65,300,195,100,195);
  triangle(100,125,300,325,100,325);
  
  //Blue Border
  fill(0,0,205);
  rect(100,70,5,250);
  quad(100,65,300,195,293,195,100,70);
  quad(160,190,290,190,300,195,170,195);
  quad(160,190,166,190,300,325,294,325);
  rect(100,320,195,5);
  
  //Chandra
  fill('white');
  circle(145,150,70);
  fill('red');
  ellipse(145,143,72,60);
  
  fill('white');
  circle(145,168,33);
  triangle(130,168,123,160,132,162);
  triangle(132,162,127,154,138,157);
  triangle(136,157,136,148,141,154);
  triangle(141,154,144,145,147,154);
  triangle(147,154,152,147,153,155);
  triangle(153,155,159,150,158,160);
  triangle(158,160,166,160,161,167);
  
  //Surya
  circle(150,260,50);

  triangle(150,235,160,221,162,245);
  triangle(158,241,176,233,171,250);
  triangle(173,250,188,252,174,262);
  triangle(175,262,188,272,168,274);
  triangle(168,272,179,291,162,282);
  triangle(162,282,158,299,148,280);
  triangle(150,284,140,298,136,276);
  triangle(140,276,122,290,127,270);
  triangle(127,270,109,268,126,258);
  triangle(126,258,111,248,128,249);
  triangle(128,249,122,231,137,239);
  triangle(137,239,138,222,150,235);
  
  noLoop();
}