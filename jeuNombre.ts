// const readline = require('readline-sync');

console.log('Je vais choisir un nombre au hasard entre 0 et 1 000 000 inclus, tu vas devoir le deviner.');
console.log(
  'Tu me proposeras des nombres et je te dirais à chaque fois si mon nombre lui \
sera inférieur ou supérieur.'
);

const min = 0;
const max = 1000000;
const randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log("J'ai choisi mon nombre, tu peux maintenant me proposer un nombre.");
console.log(randomNum);
let joueurNumber: number = 0;
let nbTest: number = 0;

do {
  joueurNumber = readline.question();

  if (joueurNumber == randomNum) {
    console.log('Bravo, tu as trouvé le nombre !');
  }

  if (joueurNumber > randomNum) {
    console.log('Mon nombre est inférieur à celui là, donne un nouveau nombre !');
  }

  if (joueurNumber < randomNum) {
    console.log('Mon nombre est supérieur à celui là, donne un nouveau nombre !');
  }

  ++nbTest;
} while (joueurNumber != randomNum);

console.log('Tu as trouvé avec', nbTest, 'éssais, félicitation !');
