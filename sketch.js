let vragen_allemaal = [
  ["Hoeveel is 1 + 1?", "2", "3", 0],
  ["Hoeveel is 2 + 4?", "8", "6", 1],
  ["Welke kleur heeft een banaan?", "Geel", "Blauw", 0],
];

let button1;
let button2;

let timer = 5;
let score = 0;
let vraag_nummer = 0;
let welke_vraag_is_goed;

function setup() {
  createCanvas(400, 400);
  background(220);
  button1 = createButton("");
  button2 = createButton("");
  maakNieuweVraag();
}

function maakNieuweVraag() {
  timerActive = true;
  background(220);
  maakVraag(
    vragen_allemaal[vraag_nummer][0],
    vragen_allemaal[vraag_nummer][1],
    vragen_allemaal[vraag_nummer][2],
    vragen_allemaal[vraag_nummer][3]
  );
}

function controlleerAntwoord1() {
  timerActive = false;
  timer = 5;
  if (welke_vraag_is_goed == 0) {
    button1.style("background-color", "green");
    score++;
  } else {
    button1.style("background-color", "red");
  }
  vraag_nummer++;
  if (vraag_nummer >= vragen_allemaal.length) {
    setTimeout(theEnd, 2000);
  } else {
    setTimeout(maakNieuweVraag, 2000);
  }
}

function controlleerAntwoord2() {
  timerActive = false;
  timer = 5;
  if (welke_vraag_is_goed == 1) {
    button2.style("background-color", "green");
    score++;
  } else {
    button2.style("background-color", "red");
  }
  vraag_nummer++;
  if (vraag_nummer >= vragen_allemaal.length) {
    setTimeout(theEnd, 2000);
  } else {
    setTimeout(maakNieuweVraag, 2000);
  }
}

function theEnd() {
  vraag_nummer = 0;
  background(220);
  button1.html("");
  button2.html("");
  text("Je score is: " + score, 10, 10);
}

function draw() {
  if (timerActive) {
    timer = timer - deltaTime / 1000;
  }
  rect(100, 100, 60);
  text(round(timer), 120, 120);
  if (timer < 0) {
    timer = 5;
    vraag_nummer++;
    if (vraag_nummer >= vragen_allemaal.length) {
      theEnd();
    } else {
      maakNieuweVraag();
    }
  }
}

function maakVraag(vraag, antwoord1, antwoord2, welkeIsGoed) {
  text(vraag, 10, 10);
  button1.style("background-color", "white");
  button1.html(antwoord1);
  button1.position(10, 30);
  button1.mousePressed(controlleerAntwoord1);

  button2.style("background-color", "white");
  button2.html(antwoord2);
  button2.position(10, 50);
  button2.mousePressed(controlleerAntwoord2);

  welke_vraag_is_goed = welkeIsGoed;
}
