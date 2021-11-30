let cat = document.querySelector("img");

cat.style.left = "0px";
cat.style.top = window.innerHeight - 296 + "px";
let left = 0;
let walksRight = true;
let colorsAreCrazy = false;

function catWalk(cat) {
  if (walksRight === true) {
    catWalkRight();
  } else {
    catWalkLeft();
  }
}

function walkingRight() {
  left += 10;
  cat.style.left = left + "px";
  setTimeout(catWalk, 50);
}

function walkingLeft() {
  left -= 10;
  cat.style.left = left + "px";
  setTimeout(catWalk, 50);
}

function makeCatDance() {
  cat.src =
    "https://i.pinimg.com/originals/44/dc/9c/44dc9c3abf24f851d23e40e7774ebeec.gif";
  colorsAreCrazy = true;
  setTimeout(makeCatNormal, 5000);
}

function makeCatNormal() {
  cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  colorsAreCrazy = false;
  if (walksRight === true) {
    walkingRight();
  } else {
    walkingLeft();
  }
}

function catWalkRight() {
  let diff = window.innerWidth - 296 - left * 2;
  if (diff < 10 && diff > -10) {
    makeCatDance();
  } else if (cat.x < window.innerWidth) {
    walkingRight();
  } else {
    walksRight = false;
    cat.style.transform = "scaleX(-1)";
    catWalk();
  }
}

function catWalkLeft() {
  let diff = window.innerWidth - 296 - left * 2;
  if (diff < 10 && diff > -10) {
    makeCatDance();
  } else if (cat.x > 0) {
    walkingLeft();
  } else {
    walksRight = true;
    cat.style.transform = "scaleX(1)";
    catWalk();
  }
}

function crazyColors() {
  if (colorsAreCrazy === true) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor =
      "rgb(" + r + ", " + g + ", " + b + ")";
    setTimeout(crazyColors, 100);
  } else {
    document.body.style.backgroundColor = "white";
    setTimeout(crazyColors, 100);
  }
}

function angryCat() {
  document.body.style.backgroundImage =
    'url("https://memegenerator.net/img/instances/73433836.jpg")';
}

function normalCat() {
  document.body.style.backgroundImage = "";
}

cat.addEventListener("mouseenter", angryCat);
cat.addEventListener("mouseout", normalCat);

catWalk();
crazyColors();
