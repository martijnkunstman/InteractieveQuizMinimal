// let vraag1 = ["Hoeveel is 1 + 1?", "2", "3", 0];
// let vraag2 = ["Hoeveel is 2 + 4?", "8", "6", 1];
// let vraag3 = ["Welke kleur heeft een banaan?", "Geel", "Blauw", 0];
// let vragen_allemaal = [vraag1, vraag2, vraag3];

let vragen_allemaal = [
  ["Hoeveel is 1 + 1?", "2", "3", 0],
  ["Hoeveel is 2 + 4?", "8", "6", 1],
  ["Welke kleur heeft een banaan?", "Geel", "Blauw", 0],
];

let score = 0;
let vraag_nummer = 2;

function setup() {
  createCanvas(400, 400);
  background(220);

  //maakVraag("Hoeveel is 1 + 1?", "2", "3", 0);

  //maakVraag("Hoeveel is 2 + 4?", "8", "6", 1);

  //maakVraag("Welke kleur heeft een banaan?", "Geel", "Blauw", 0);

  maakVraag(
    vragen_allemaal[vraag_nummer][0],
    vragen_allemaal[vraag_nummer][1],
    vragen_allemaal[vraag_nummer][2],
    vragen_allemaal[vraag_nummer][3]
  );
}

function controlleerAntwoord() {
  //CONTROLEREN OF HET GOED IS...
  console.log("click");
}

function draw() {}

function maakVraag(vraag, antwoord1, antwoord2, welkeIsGoed) {
  text(vraag, 10, 10);
  let button1 = createButton(antwoord1);
  button1.position(10, 30);
  button1.mousePressed(controlleerAntwoord);

  let button2 = createButton(antwoord2);
  button2.position(10, 50);
  button2.mousePressed(controlleerAntwoord);
}
