var redValue = 0;
var greenValue = 0;
var blueValue = 0;

function setup() {
  createCanvas(501, 551);
  background(255);
}

function draw() {
  stroke(200);

  fill(255, 0, 0);
  rect(25, 0, 50, 50);

  fill(0, 0, 255);
  rect(125, 0, 50, 50);

  fill(0, 255, 0);
  rect(225, 0, 50, 50);

  fill(0);
  rect(325, 0, 50, 50);

  fill(255);
  rect(425, 0, 50, 50);

  stroke(0);
  line(0, 52, 500, 52);
  line(0, 0, 0, 550);
  line(0, 0, 500, 0);
  line(500, 550, 0, 550);
  line(500, 550, 500, 0);

  if (mouseIsPressed && (mouseX >= 25 && mouseX <= 75 && mouseY <= 50)) {
    redValue = 255;
    greenValue = 0;
    blueValue = 0;
  } else if (mouseIsPressed && (mouseX >= 125 && mouseX <= 175 && mouseY <= 50)) {
    redValue = 0;
    greenValue = 0;
    blueValue = 255;
  } else if (mouseIsPressed && (mouseX >= 225 && mouseX <= 275 && mouseY <= 50)) {
    redValue = 0;
    greenValue = 255;
    blueValue = 0;
  } else if (mouseIsPressed && (mouseX >= 325 && mouseX <= 375 && mouseY <= 50)) {
    redValue = 0;
    greenValue = 0;
    blueValue = 0;
  } else if (mouseIsPressed && (mouseX >= 425 && mouseX <= 475 && mouseY <= 50)) {
    redValue = 255;
    greenValue = 255;
    blueValue = 255;
  }

  if (mouseIsPressed && mouseY > 62) {
    fill(redValue, greenValue, blueValue);
    stroke(redValue, greenValue, blueValue);
    ellipse(mouseX, mouseY, 20, 20);
  }
}
