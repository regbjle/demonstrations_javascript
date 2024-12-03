/*
* Déclaration de variables
*/

var variableGlobale = "test";// pas bien
let variableLocale = "test 2";// bonne pratique : utiliser let

// on appelle ça la portée de la variable
let estMajeur = true;
let age = 32;
let prenom = "Régis"; // \ pour écrire entre " " ou ' '
let test;
// "échapper un caractère" --> \ " au sein d'une chaîne de caractère"
console.log(estMajeur);
console.log(age);
console.log(prenom);
console.log(test);

// notion de typage dynamique
age = "trente deux";
console.log(age);

/*
* Utilisation des fonctions
*/

// Déclaration d'une fonction appelée "additionner" et qui prend 2 paramètres 
function additionner(nombre1, nombre2){
    return nombre1 + nombre2;
}

// Appel de la fonction additionner
let resultat = additionner(5,9);
console.log(resultat);

/*
* Les opérateurs
*/

console.log(5 == 2); //false
console.log(5 > 2); //true
console.log(5 < 2); //false
console.log(5 != 2); //true

console.log(5 == "5"); //true
console.log(5 === "5"); //false

console.log("10"+1);// 101
console.log("10"+1 - 1);//100

/*
* Les structures de controle
*/

let categorie = "Fruits et légumes"

if (categorie === "Produits laitiers") {
    console.log("Vous êtes dans le rayon produits laitiers");
} else if (categorie === "Bio") {
    console.log("Vous êtes dans le rayon Bio");
} else {
    console.log("Vous êtes dans le rayon fruits et légumes");
}

// alternative avec un switch
switch (categorie){
    case "Produits laitiers" : {
        console.log("Vous êtes dans le rayon produits laitiers");
        break;
    }
    case "Bio" : {
        console.log("Vous êtes dans le rayon Bio");
        break;
    }
    default : {
        console.log("Vous êtes dans le rayon fruits et légumes");
        break;
    }
}

// Boucles
// while : une boucle pour laquelle le nombre d'iterations n'est pas prévisible
// exemple de la suite de Syracuse
let valeur = 1024;
while (valeur !==1) {
    console.log(valeur);
    if (valeur %2 ===0) { // si la valeur est paire (% modulo)
        valeur = valeur / 2;
    } else {
        valeur = valeur *3 +1; 
    }
}
console.log("Fin du traitement");

// for : une boucle dont je connais le nombre de tours
for (let i = 0; i < 50; i++ ) {
    console.log(i);
}

// différence entre while et do while : le do while s'éxécute forcément au moins 1 fois
let nombre = 10;
while (nombre < 10) {
    console.log("Passage dans la boucle While");
    console.log(nombre);
    nombre++;
}
nombre =10;
do{
    console.log("Passage dans la boucle do While");
    console.log(nombre);
    nombre++;
} while (nombre <10);

// le do while est utilisé pour garantir au moins 1 exécution de la boucle

