function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    translate(0, height);  //moves the origin to bottom left
    scale(1, -1);  //flips the y values so y increases "up"
    stroke('green');
  
    //Points
    X1 = 50;
    Y1 = 250;
    X2 = 200;
    Y2 = 100;
    
    let x, y, xend, yend, m;
    let d, dx, dy;
    
    if(X1<X2){
      x = X1;
      y = Y1;
      xend = X2;
      yend = Y2;
    }
    else{
      x = X2;
      y = Y2;
      xend = X1;
      yend = Y1;
    }
  
    point(x,y);
    
    //slope
    m = (Y2 - Y1) / (X2 - X1);
    console.log("Slope:", m);
    
    dx = Math.abs(X2 - X1);
    dy = Math.abs(Y2 - Y1);
    
    if (Math.abs(m) < 1){
      console.log('|Slope| < 1');
      d = dy - ( dx / 2);
      while( x < xend){
        x++;
        if (d < 0){
          d = d + dy;
        }
        else {
          d = d + dy - dx;
          if (m < 0){
            y = y - 1;
          }
          else{
            y = y + 1;
          }
        }
        point(x,y);
      }
    }
    else{
      console.log('|Slope| >= 1');
      d = dx - ( dy / 2);
      if ( m < 0){
            while( y > yend){
              y = y -1;
              if (d < 0){
                d = d + dx;
              }    
              else {
                d = d + dx - dy;
                x = x + 1;
              }
              point(x,y);
            }
      }
      else{
          while( y < yend){
              y = y + 1;
              if (d < 0){
                d = d + dx;
              }    
              else {
                d = d + dx - dy;
                x = x + 1;
              }
              point(x,y);
            }
      }
    }
      
    
    noLoop();
  }