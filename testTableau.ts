const readline = require('readline-sync');

const max = 100000;
let tableau: number[] = [0];

for (let nbBoucle = 0; nbBoucle < 1000000; nbBoucle++) {
  const randomNum = Math.floor(Math.random() * max);
  tableau.push(randomNum);
}

console.log('Donne-moi un nombre et je te dirais combien de fois il a été dans le tableau.');

const nbDuJoueur = readline.question();
const nbDuNbDuJoueur = tableau.indexOf(nbDuJoueur);

console.log(nbDuNbDuJoueur);
