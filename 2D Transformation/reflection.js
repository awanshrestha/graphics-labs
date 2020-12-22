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
     reflectionx = reflect2d(triangle, x)
     drawShape(reflectionx);
     reflectiony = reflect2d(triangle, y)
     drawShape(reflectiony);
     reflectiono = reflect2d(triangle, origin)
     drawShape(reflectiono);
 }
 
 function reflect2d(shape, about) {
 
     if (about == x){
       reflectionMatrix = [
         [1, 0, 0],
         [0, -1, 0],
         [0, 0, 1]     
       ]
     }
     else if(about == y){
       reflectionMatrix = [
         [-1, 0, 0],
         [0, 1, 0],
         [0, 0, 1]     
       ]
     } 
     else if(about == origin){
       reflectionMatrix = [
         [-1, 0, 0],
         [0, -1, 0],
         [0, 0, 1]     
       ]
     }
 
     var newPoints = new Array();
     shape.forEach( point => {
       var p = [point[0], point[1], [1]]
       var x = reflectionMatrix[0][0] * p[0] + reflectionMatrix[0][1] * p[1] + reflectionMatrix[0][2] * p[2];
       var y = reflectionMatrix[1][0] * p[0] + reflectionMatrix[1][1] * p[1] + reflectionMatrix[1][2] * p[2];
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
 
 