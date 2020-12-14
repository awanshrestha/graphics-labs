let items = [];
let itemWidth;
let state = [];

function setup() {
  let container = document.getElementById('container');
  let numbers = document.querySelector('#itemnumbers').value;
  numbers = parseInt(numbers);
  myWidth = container.offsetWidth;
  let myCanvas = createCanvas(myWidth, windowHeight - 200 );
  myCanvas.parent(container)

  items = new Array(numbers);
  itemWidth = myWidth / items.length
  for (let i = 0; i < items.length; i++) {
    items[i] = random(height);
    state[i] = -1;
  }
}

visualize();

function visualize(){
  quickSort(items, 0, items.length - 1);
}

async function quickSort(array, first, last) {
  if (first >= last) {
    return;
  }
  let index = await partitionArr(array, first, last);
  state[index] = -1;

  await Promise.all([
    quickSort(array, first, index - 1),
    quickSort(array, index + 1, last)
  ]);
}

async function partitionArr(array, first, last) {
  for (let i = first; i < last; i++) {
    state[i] = 1;
  }
  let p1 = array[last];
  let p2 = first;
  state[p2] = 0;
  for (let i = first; i < last; i++) {
    if (array[i] < p1) {
      await swap(array, i, p2);
      state[p2] = -1;
      p2++;
      state[p2] = 0;
    }
  }
  await swap(array, p2, last);

  for (let i = first; i < last; i++) {
    if (i != p2) {
      state[i] = -1;
    }
  }
  return p2;
}

async function swap(array, x, y) {
  await sleep(50);
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}

function draw() {
  background("#45bbc7e6");
  for (let i = 0; i < items.length; i++) {
     stroke('green')
    if (state[i] == 0) {
      fill(255,0,0);
    } else if (state[i] == 1) {
      fill('#D6FFB7');
    } else {
      fill(255);
    }
    rect(i * itemWidth, height - items[i], itemWidth, items[i]);
  }
}

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function validate(e) {
  var theEvents = e || window.event;

  if (theEvents.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
      var key = theEvents.keyCode || theEvents.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvents.returnValue = false;
    if(theEvents.preventDefault) theEvents.preventDefault();
  }
}