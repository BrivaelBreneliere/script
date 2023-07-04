let readline = require('readline-sync'); //*il est déja dans programmeCalcul2Nombres.ts

console.log(
  'Donne les coordonnées x et y de ton point A, sépare les deux valeurs juste par un espace.'
);
let coPointA = readline.question();
let [coPointAX, coPointAY] = coPointA.split(' ');

console.log(
  'Donne les coordonnées x et y de ton point B, sépare les deux valeurs juste par un espace.'
);
let coPointB = readline.question();
let [coPointBX, coPointBY] = coPointB.split(' ');

coPointAX = Math.sqrt(coPointAX * coPointAX);
coPointBX = Math.sqrt(coPointBX * coPointBX);

coPointAY = Math.sqrt(coPointAY * coPointAY);
coPointBY = Math.sqrt(coPointBY * coPointBY);

let distanceX: number = 0,
  distanceY: number = 0;

if (coPointAY == coPointBY) {
  distanceY = coPointAY;
}

if (coPointAX < coPointBX) {
  distanceX = coPointBX - coPointAX;
} else {
  distanceX = coPointAX - coPointBX;
}

if (coPointAY < coPointBY) {
  distanceY = coPointBY - coPointAY;
} else {
  distanceY = coPointAY - coPointBY;
}

let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

console.log('Voici la distance entre ces deux points', distance);

// ts-node ./distance2Points.ts
