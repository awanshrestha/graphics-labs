function setup() {
    createCanvas(600, 600);
 }
 
 function draw() {
     noLoop();
     background(220);
     stroke("green");
     line(0, height / 2, width, height / 2); //Main lines
     line(width / 2, 0, width / 2, height);
     translate(width / 2, height / 2);  //center to origin
     scale(1, -1);  //flips the y values so y increases "up"
     
     var triangle = [[0, 0],[0, 90],[150, 0]];
     stroke("red");
     fill("#e1292999");
     drawShape(triangle);
 
     stroke("#e97575");
     fill("#de969659");
     shear1 = shear2d(triangle, x, 0.25)
     drawShape(shear1);
     shear2 = shear2d(triangle, y, 1)
     drawShape(shear2);
 }
 
 function shear2d(shape, about, sh) {
 
     if (about == x){
       shearMatrix = [
         [1, sh, 0],
         [0, 1, 0],
         [0, 0, 1]     
       ]
     }
     else if(about == y){
       shearMatrix = [
         [1, 0, 0],
         [sh, 1, 0],
         [0, 0, 1]     
       ]
     }
 
     var newPoints = new Array();
     shape.forEach( point => {
       var p = [point[0], point[1], [1]]
       var x = shearMatrix[0][0] * p[0] + shearMatrix[0][1] * p[1] + shearMatrix[0][2] * p[2];
       var y = shearMatrix[1][0] * p[0] + shearMatrix[1][1] * p[1] + shearMatrix[1][2] * p[2];
       newPoints.push([x, y]);
    });
     return newPoints;
 }
   
 function drawShape(shape) {
   beginShape();
   for (var i = 0; i < shape.length; i++) {
       x = shape[i][0];
       y = shape[i][1];
       vertex(x, y);
   }
   endShape(CLOSE);
 }
 
 