const readline = require('readline-sync');

console.log('Bonjour ! Veuillez écrire <<Jouer>> pour démarrer une partie');

let start = readline.question();
let coordonnéeX: number;
let coordonnéeY: number;

if (start === 'Jouer') {
  console.log(
    "Dans ce jeu, vous êtes une personne aveugle, mais vous voulez voyager le plus loin possible. \
Et pour cela vous avez une carte et un blob qui est votre animal domestique, il va vous proposer \
un trajet pour un voyage le plus long possible. Le blob va aller dans des directions totalement\
aléatoires : devant, derrière, à gauche et à droite. Et dans votre monde les régions sont \
toutes carrées et le blob peut avancer d'une région à chaque fois et il vous dira à chaque fois \
 dans quelle direction il est allé. Et votre score va augmenter à chaque région de plus ! \
Votre objectif est de dire à chaque fois le nombre de fois que le \
blob est passé dans la région. Si vous vous trompez vous aurez fini la partie.\
Remarque 1 : à chaque fois que \
le blob se déplaces il prend une nouvelle direction liée son déplacement précédent(exemple: le blob \
dit deux fois <<je me suis déplacé derrière moi>> il retourne alors à la même position. \
Remarque 2 : plus vous avancer loin plus votre score va augmenter ainsi que le nombre de points \
par nouvelles distances parcourues."
  );

  console.log("Le blob est tourné vers l'est");

  const directions = ['droite', 'gauche', 'devant', 'derrière'];

  let directionJoueur = 'est';
  let coordonnéeX = 0;
  let coordonnéeY = 0;
  let tableau: number[][] = [];
  let nbJoueur: number = 0;
  let nombreOccurrences: number = 0;
  let score: number = 0;

  tableau.push([0, 0]);

  do {
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];

    if (randomDirection === 'devant' && directionJoueur === 'est') {
      console.log('Le blob a avancé', randomDirection, 'lui');
      directionJoueur = 'est';
      coordonnéeX++;
    } else if (randomDirection === 'derrière' && directionJoueur === 'est') {
      console.log('Le blob a avancé', randomDirection, 'lui');
      directionJoueur = 'ouest';
      coordonnéeX--;
    } else if (randomDirection === 'gauche' && directionJoueur === 'est') {
      console.log('Le blob a avancé à', randomDirection, 'de lui');
      directionJoueur = 'nord';
      coordonnéeY++;
    } else if (randomDirection === 'droite' && directionJoueur === 'est') {
      console.log('Le blob a avancé à', randomDirection, 'de lui');
      directionJoueur = 'sud';
      coordonnéeY--;
    } else if (randomDirection === 'derrière' && directionJoueur === 'ouest') {
      console.log('Le blob a avancé', randomDirection, 'lui');
      directionJoueur = 'est';
      coordonnéeX++;
    } else if (randomDirection === 'devant' && directionJoueur === 'ouest') {
      console.log('Le blob a avancé', randomDirection, 'lui');
      directionJoueur = 'ouest';
      coordonnéeX--;
    } else if (randomDirection === 'gauche' && directionJoueur === 'ouest') {
      console.log('Le blob a avancé à', randomDirection, 'de lui');
      directionJoueur = 'sud';
      coordonnéeY--;
    } else if (randomDirection === 'droite' && directionJoueur === 'ouest') {
      console.log('Le blob a avancé à', randomDirection, 'de lui');
      directionJoueur = 'nord';
      coordonnéeY++;
    } else if (randomDirection === 'devant' && directionJoueur === 'sud') {
      console.log('Le blob a avancé', randomDirection, 'lui');
      directionJoueur = 'sud';
      coordonnéeY--;
    } else if (randomDirection === 'derrière' && directionJoueur === 'sud') {
      console.log('Le blob a avancé', randomDirection, 'lui');
      directionJoueur = 'nord';
      coordonnéeY++;
    } else if (randomDirection === 'gauche' && directionJoueur === 'sud') {
      console.log('Le blob a avancé à', randomDirection, 'de lui');
      directionJoueur = 'est';
      coordonnéeX++;
    } else if (randomDirection === 'droite' && directionJoueur === 'sud') {
      console.log('Le blob a avancé à', randomDirection, 'de lui');
      directionJoueur = 'ouest';
      coordonnéeX--;
    } else if (randomDirection === 'devant' && directionJoueur === 'nord') {
      console.log('Le blob a avancé', randomDirection, 'lui');
      directionJoueur = 'nord';
      coordonnéeY++;
    } else if (randomDirection === 'derrière' && directionJoueur === 'nord') {
      console.log('Le blob a avancé', randomDirection, 'lui');
      directionJoueur = 'sud';
      coordonnéeY--;
    } else if (randomDirection === 'gauche' && directionJoueur === 'nord') {
      console.log('Le blob a avancé à', randomDirection, 'de lui');
      directionJoueur = 'ouest';
      coordonnéeX--;
    } else if (randomDirection === 'droite' && directionJoueur === 'nord') {
      console.log('Le blob a avancé à', randomDirection, 'de lui');
      directionJoueur = 'est';
      coordonnéeX++;
    }

    tableau.push([coordonnéeX, coordonnéeY]);

    const derniereValeurDuTableau = tableau[tableau.length - 1];

    let nombreOccurrences = 0;

    for (const element of tableau) {
      if (JSON.stringify(element) === JSON.stringify(derniereValeurDuTableau)) {
        nombreOccurrences++;
      }
    }

    console.log('Combien de fois suis-je déja passé sur cette case ?');

    let nbJoueur = parseInt(readline.question());

    if (nbJoueur === nombreOccurrences) {
      console.log('Bien joué, continuons le chemin !');
      score++;
    } else {
      console.log(
        'Dommage, vous avez fait une erreur ! La réponse était',
        nombreOccurrences,
        '.',
        'La partie est terminée. Mais tu as eu un score de ',
        score,
        '!'
      );
      break;
    }
  } while (nbJoueur === nombreOccurrences);
}
