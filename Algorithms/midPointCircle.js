function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    translate(0, height);  //moves the origin to bottom left
    scale(1, -1);  //flips the y values so y increases "up"
    stroke('green');
  
    midPointCircle(200,200,50);
    noLoop();
  }
  
  function midPointCircle(cx, cy, r){
    var x = 0;
    var y = r;
    
    var p = 5/4 - r;
    
    while(x < y){
      if (p < 0){
        x = x + 1;
        p = p + 2 * x + 1;
      }
      else{
        x = x + 1;
        y = y - 1;
        p = p + 2 * x + 1 - 2 * y;
      }
      drawSymmetry(x,y,cx,cy);
    }
  }
  
  function drawSymmetry(x, y, cx, cy){
     point(x + cx, y + cy);
     point(-x + cx, y + cy);
     point(x + cx, -y + cy);
     point(-x + cx, -y + cy);
     point(y + cx, x + cy);
     point(-y + cx, x + cy);
     point(y + cx, -x + cy);
     point(-y + cx, -x + cy);
  }