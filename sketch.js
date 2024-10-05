let values;
let items;
let sketchWidth = 1000
let sketchHeight = 500
function setup() {
  
  createCanvas(sketchWidth, sketchHeight);
  frameRate(60);
  
  values = new Array(width / 8);
  items = new Array(values.length);
  
  for (let i = 0; i < values.length; i++) {
    values[i] = round(random(10, height));
    items[i] = new Item(i* 8, 0, i * 8, values[i]);
  }
  
  // print("number of items: " + items.length + "\n");
  
  // for (let i = 0; i < items.length ; i++) {
  //   print(items[i].value + "\n");
  // }
  
}


let count = 0
function draw() {
  background(0, 0, 0);

  stroke(255)
  strokeWeight(1)
  // line(items[i].x1 - 4, 0, items[i].x2 - 4, height)
  // line(items[i].x1 + 4, 0, items[i].x2 + 4, height)
  let compareIndex = count + 1;
  if (items[count].value > items[compareIndex].value) {
    // swap(items[i], items[i+1]);
    let temp;
    temp = items[count].value;
    items[count].value = items[count + 1].value;
    items[count+1].value = temp; 
    print("swapped: " + items[count].value + " and " + items[count+1].value + "\n");
  }

  for (let i = 0 ; i < items.length ; i++) {
    items[i].display();
  }
  if (count != items.length - 2) {
    count ++;
  }
  else {
    count = 0;
  }
  print("count: " + count)
}

class Item {
  constructor(_x1, _y1, _x2, _value) {
    this.x1 = _x1;
    this.y1 = _y1;
    this.x2 = _x2;
    this.value = _value;

    this.r_value = round(random(0, 255));
    this.g_value = round(random(0, 255));
    this.b_value = round(random(0, 255));
    this.itemColor = color(this.r_value, this.g_value, this.b_value);
  }
  
  display() {
      stroke(this.itemColor);
      strokeWeight(4);
      line(this.x1, this.y1, this.x2, this.value);
  }
}
