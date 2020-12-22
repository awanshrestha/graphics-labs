var _INSIDE = 0;
var _LEFT = 1;
var _RIGHT = 2;
var _BOTTOM = 4;
var _TOP = 8;
var x_max = 400;
var y_max = 400;
var x_min = 200;
var y_min = 200;

function setup() {
 createCanvas(600, 600);
}

function draw() {
    noLoop();
    background(220);
    line(x_min, y_min, x_max, y_min);
    line(x_min, y_min, x_min, y_max);
    line(x_max, y_max, x_max, y_min);
    line(x_max, y_max, x_min, y_max);

    var theLine = cohenSutherland(210, 250, 290, 280);
    stroke('green');
    line(210, 250, 290, 280);
    if (theLine) {
      stroke('green');
      line(theLine[0], theLine[1], theLine[2], theLine[3]);
    }

    theLine = cohenSutherland(100, 230, 350, 80);
    stroke('red');
    line(100, 230, 350, 80);
    if (theLine) {
        stroke('green');
        line(theLine[0], theLine[1], theLine[2], theLine[3]);
    }

    theLine = cohenSutherland(400, 100, 300, 500);
    stroke('red');
    line(400, 100, 300, 500);
    if (theLine) {
        stroke('green');
        line(theLine[0], theLine[1], theLine[2], theLine[3]);
    }
}

function computeCode(x, y) {
    var code = _INSIDE;
    if (x < x_min){ 
        code |= _LEFT;
    }
    else if (x > x_max) {
        code |= _RIGHT;
    }
    if (y < y_min) {
        code |= _BOTTOM;
    }
    else if (y > y_max) {
        code |= _TOP;
    }
    return code;
}

function cohenSutherland(x1, y1, x2, y2) {
    var code1 = computeCode(x1, y1);
    var code2 = computeCode(x2, y2);
    var accept = false;

    while (true) {
      if (code1 == 0 && code2 == 0) {
        accept = true;
        break;
      } 
      else if (code1 & code2) {
        break;
      } 
      else {
        var code_out;
        var x, y;

        if (code1 != 0) code_out = code1;
        else code_out = code2;

        if (code_out & _TOP) {
          x = x1 + ((x2 - x1) * (y_max - y1)) / (y2 - y1);
          y = y_max;
        } else if (code_out & _BOTTOM) {
          x = x1 + ((x2 - x1) * (y_min - y1)) / (y2 - y1);
          y = y_min;
        } else if (code_out & _RIGHT) {
          y = y1 + ((y2 - y1) * (x_max - x1)) / (x2 - x1);
          x = x_max;
        } else if (code_out & _LEFT) {
          y = y1 + ((y2 - y1) * (x_min - x1)) / (x2 - x1);
          x = x_min;
        }

        if (code_out == code1) {
          x1 = x;
          y1 = y;
          code1 = computeCode(x1, y1);
        } else {
          x2 = x;
          y2 = y;
          code2 = computeCode(x2, y2);
        }
      }
    }

    if (accept)
      return [x1, y1, x2, y2];
    return false;
}
