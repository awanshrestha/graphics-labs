function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    stroke('red');
    translate(0, height);  //moves the origin to bottom left
    scale(1, -1);  //flips the y values so y increases "up"
    X1 = 100;
    Y1 = 150;
    X2 = 300;
    Y2 = 20;
    
    //DDA
    dx = X2 - X1;
    dy = Y2 - Y1;
    let steps;
    
    if(Math.abs(dx) > Math.abs(dy)){
      steps = Math.abs(dx);
    }
    else{
      steps = Math.abs(dy);
    } 
    
    Xincrement = dx / steps;
    Yincrement = dy / steps;
    let x = X1;
    let y = Y1;
    point(x,y);
    
    for (let z = 0; z < steps; z++){
      x = x + Xincrement;
      y = y + Yincrement;
        point(Math.round(x),Math.round(y));
    }
    
    noLoop();
  }
