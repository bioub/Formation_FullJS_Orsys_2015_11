
/*
 * Exercice : Deviner le nombre aléatoire
 * en donnant des indications plus grand / plus petit
 * 
 * 1 - nombre illimités d'essais
 * 2 - limiter à 7 essais
 * 3 - stocker dans un tableaux les essais et les réafficher
 * entre chaque tour
 * 4 - gérer les erreurs (saisie < 0 ou > 100, saisie abc...)
 */
'use strict';

function Jeu() {
    
}

var nbAlea = Math.floor(Math.random() * 101);

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jouer() {
    rl.question("What do you think of Node.js? ", function (answer) {
        // TODO: Log the answer in a database
        console.log("Thank you for your valuable feedback:", answer);

        jouer();
        //rl.close();
    });
}
jouer();


