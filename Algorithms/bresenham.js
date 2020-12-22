function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    translate(0, height);  //moves the origin to bottom left
    scale(1, -1);  //flips the y values so y increases "up"
    stroke('green');
    
    //Taking Points
    
    X1 = 50;
    Y1 = 50;
    X2 = 300;
    Y2 = 220;
    
    let x,y,m;
    let dx,dy,p;
    if(X1<X2){
      x = X1;
      y = Y1;
    }
    else{
      x = X2;
      y = Y2;
    }
    point(x,y);
    
    
    //slope
    m = (Y2 - Y1) / (X2 - X1);
    console.log("Slope:", m);
    dy = Math.abs(Y2 - Y1);
    dx = Math.abs(X2 - X1);
  
    // |m| < 1
    if(Math.abs(m) < 1){
      console.log('|Slope| < 1');
      pk = 2 * dy - dx;
      
      for (let counter = 0; counter < abs(dx); counter++){
        x = x + 1;
        if(pk < 0){
          pk = pk + 2 * dy;
        }
        else{
          if(m < 0){
            y = y - 1;
          }
          else {
            y = y + 1;
          }
          pk = pk + 2 * dy - 2 * dx;
        }
        point(x,y);
      }
    }
    
    // |m| >= 1 
    else{
      console.log('|Slope| >= 1');
      pk = 2 * dx - dy;
      
      for (let counter1 = 0; counter1 < abs(dy); counter1++){
        if(m < 0){
          y = y -1;
        }
        else{
          y = y + 1;
        }
        if(pk < 0){
          pk = pk + 2 * dx;
        }
        else{
          x = x + 1;
          pk = pk + 2 * dx - 2 * dy;
        }
        point(x,y);
      }
    }
    
    
    noLoop();
  }