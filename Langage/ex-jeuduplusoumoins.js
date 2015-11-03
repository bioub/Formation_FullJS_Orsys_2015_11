
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

var readline = require('readline');

function Jeu(options) {
    options = options || {};
    options.min = options.min || 0;
    options.max = options.max || 100;
    this.essaisMax = options.essaisMax || 7;
    this.tentatives = [];
    
    
    this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    this.nbAlea = Math.floor(Math.random() * (options.max - options.min + 1)) + options.min;
}

Jeu.prototype.jouer = function() {
    
    var that = this;
    
    if (this.tentatives.length) {
        console.log('Déjà joué : ' + this.tentatives.join(', '));
    }

    this.rl.question("Quel est le nombre ? ", function (saisie) {
        
        var nbSaisi = parseInt(saisie);
        
        if (isNaN(nbSaisi)) {
            console.log('Il faut saisi un nombre');
            return that.jouer();
        }
        
        that.tentatives.push(nbSaisi);
        
        if (nbSaisi < that.nbAlea) {
            console.log('Le nombre recherché est plus grand');
            return that.jouer();
        }
        else if (nbSaisi > that.nbAlea) {
            console.log('Le nombre recherché est plus petit');
            return that.jouer();
        }

        if (nbSaisi === that.nbAlea) {
            console.log('Gagné');
            that.rl.close();
        }
    });
};

var jeu = new Jeu({min: 1, max: 50});
jeu.jouer();



