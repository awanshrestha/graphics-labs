let boxs = [
    [[0], [0], [0]],
    [[0], [100], [0]],
    [[100], [100], [0]],
    [[100], [0], [0]],
    [[0], [0], [100]],
    [[0], [100], [100]],
    [[100], [100], [100]],
    [[100], [0], [100]],
];

function setup(){
 createCanvas(screen.width,screen.height,WEBGL);
 background('#f0f0f0')
}

function draw(){
 noLoop();
 translate(-200,-200);
 fill("blue");

 printArr(boxs, 0, 1, 2, 3)
 printArr(boxs, 4, 5, 6, 7)
 printArr(boxs, 0, 4, 5, 1)
 printArr(boxs, 3, 7, 6, 2)
 printArr(boxs, 1, 5, 6, 2)
 printArr(boxs, 0, 4, 7, 3)

 boxs = translate3d(boxs, 200, 50, 50)
 
 fill("#3f60e1c4");
 printArr(boxs, 0, 1, 2, 3)
 printArr(boxs, 4, 5, 6, 7)
 printArr(boxs, 0, 4, 5, 1)
 printArr(boxs, 3, 7, 6, 2)
 printArr(boxs, 1, 5, 6, 2)
 printArr(boxs, 0, 4, 7, 3)


}

function printArr(params, i, j, k, l) {
 beginShape();
 vertex(params[i][0], params[i][1], params[i][2]);
 vertex(params[j][0], params[j][1], params[j][2]);
 vertex(params[k][0], params[k][1], params[k][2]);
 vertex(params[l][0], params[l][1], params[l][2]);
 endShape(CLOSE);
}

function translate3d(shape, tx, ty, tz){
var newPoints = new Array();
 matrix = [
   [1, 0, 0, tx],
   [0, 1, 0, ty],
   [0, 0, 1, tz],
   [0, 0, 0, 1]
 ]
shape.forEach(element => {
 p = [element[0], element[1], element[2], 1 ]
 const x =
 p[0] * matrix[0][0] +
 p[1] * matrix[0][1] +
 p[2] * matrix[0][2] +
 p[3] * matrix[0][3];

 const y =
 p[0] * matrix[1][0] +
 p[1] * matrix[1][1] +
 p[2] * matrix[1][2] +
 p[3] * matrix[1][3];

 const z =
 p[0] * matrix[2][0] +
 p[1] * matrix[2][1] +
 p[2] * matrix[2][2] +
 p[3] * matrix[2][3];

 newPoints.push([x,y,z]);
});

return newPoints;
}
