var redValue = 0;
var greenValue = 0;
var blueValue = 0;

const width = 500;
const height = 550;

const canvasOffset = 52;
const paletteOffset = 25;
const paintSquareSize = 50;

function setup() {
  createCanvas(width + 1, height + 1);
  background(255);
}

function draw() {
  stroke(200);

  redFill();
  const redSquare = 0;
  paintSquare(redSquare);

  blueFill();
  const blueSquare = 100;
  paintSquare(blueSquare);

  greenFill();
  const greenSquare = 200;
  paintSquare(greenSquare);

  fill(0);
  const blackSquare = 300;
  paintSquare(blackSquare);

  fill(255);
  const whiteSquare = 400;
  paintSquare(whiteSquare);

  stroke(0);
  line(0, canvasOffset, width, canvasOffset);
  line(0, 0, 0, height);
  line(0, 0, width, 0);
  line(width, height, 0, height);
  line(width, height, width, 0);

  if (isPressedInsidePaintSquare(redSquare)) {
    makeRed();
  } else if (isPressedInsidePaintSquare(blueSquare)) {
    makeBlue();
  } else if (isPressedInsidePaintSquare(greenSquare)) {
    makeGreen();
  } else if (isPressedInsidePaintSquare(blackSquare)) {
    makeBlack();
  } else if (isPressedInsidePaintSquare(whiteSquare)) {
    makeWhite();
  }

  if (mouseIsPressed && mouseY > canvasOffset + 10) {
    fill(redValue, greenValue, blueValue);
    stroke(redValue, greenValue, blueValue);
    ellipse(mouseX, mouseY, 20, 20);
  }
}

function paintSquare(squareStart) {
  rect(squareStart + paletteOffset, 1, paintSquareSize, paintSquareSize);
}

function isPressedInsidePaintSquare(squareStart) {
  let leftEdge = squareStart + paletteOffset;
  let rightEdge = leftEdge + paintSquareSize;
  let isInsideWidth = mouseX >= leftEdge && mouseX <= rightEdge;
  let isInsideHeight = mouseY <= 50;
  return mouseIsPressed && isInsideWidth && isInsideHeight;
}

function redFill() {
  fill(255, 0, 0);
}

function blueFill() {
  fill(0, 0, 255);
}

function greenFill() {
  fill(0, 255, 0);
}

function makeRed() {
  redValue = 255;
  greenValue = 0;
  blueValue = 0;
}

function makeBlue() {
  redValue = 0;
  greenValue = 0;
  blueValue = 255;
}

function makeGreen() {
  redValue = 0;
  greenValue = 255;
  blueValue = 0;
}

function makeBlack() {
  redValue = 0;
  greenValue = 0;
  blueValue = 0;
}

function makeWhite() {
  redValue = 255;
  greenValue = 255;
  blueValue = 255;
}
