// const readline = require('readline-sync');

console.log('Donne un nombre.')
let nombre1String = readline.question()

console.log('Donne un deuxième nombre.')
let nombre2String = readline.question()
 
let nombre1 = parseFloat(nombre1String);
let nombre2 = parseFloat(nombre2String);

let somme = nombre1 + nombre2
let soustraction = nombre1 - nombre2
let produit = nombre1 * nombre2
let quotient = nombre1 / nombre2

console.log('Voici la somme de ces deux nombres : ' , somme , '.')
console.log('Et voici la soustraction du deuxième nombre au premier nombre : ' , soustraction , '.')
console.log('Et voici le produit de ces deux nombres : ' , produit , '.')
console.log('Et voilà le quotient du premier nombre divisé par le deuxième nombre : ' , quotient , '.')

