// const readline = require('readline-sync'); *il est déja dans programmeCalcul2Nombres.ts

console.log("Comment t'appelles-tu ?");

let prenom = readline.question()

let reponse = "Bonjour, " + prenom;
// ou alors: reponse = `Bonjor, ${prenom}`;

console.log(reponse)
