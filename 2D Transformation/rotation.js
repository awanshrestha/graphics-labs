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
     triangle = rotate2d(triangle, 120)
     drawShape(triangle);
 }
 
 function rotate2d(shape, degree) {
     angle = (Math.PI * degree) / 180;
     rotationMatrix = [
       [Math.cos(angle), -Math.sin(angle), 0],
       [Math.sin(angle), Math.cos(angle), 0],
       [0, 0, 1]
     ]
 
     var newPoints = new Array();
     shape.forEach( point => {
       var p = [point[0], point[1], [1]]
       var x = rotationMatrix[0][0] * p[0] + rotationMatrix[0][1] * p[1] + rotationMatrix[0][2] * p[2];
       var y = rotationMatrix[1][0] * p[0] + rotationMatrix[1][1] * p[1] + rotationMatrix[1][2] * p[2];
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
 
 