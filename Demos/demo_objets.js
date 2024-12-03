let prenom = "Régis";
let nom = "HAMON";
let note = 10;

let prenom2 = "Clémence";
let nom2 = "UNTEL";
let note2 = 8;

let prenoms = ["Régis", "Clémence"];
let noms = ["HAMON", "UNTEL"];
let notes = [10, 8];


prenoms.push("Etienne");
noms.push("Cassin");
notes.push(4);

notes.sort();
console.log(notes);

for (let i = 0; i < 3; i++) {
    console.log("Affichage de l 'étudiant " + i);
    console.log(prenoms[i]);
    console.log(noms[i]);
    console.log(notes[i]);
}

// Alternative avec des objets
let etudiants = [
    {"prenom" : "Régis", "nom" : "HAMON", "note" : 10},
    {"prenom" : "Clémence", "nom" : "UNTEL", "note" : 8},
    {"prenom" : "Clémence", "nom" : "Unautre", "note" : 16},
    {"prenom" : "Etienne", "nom" : "CASSIN", "note" : 4},
];

for (let i = 0; i < etudiants.length; i++) {
    console.log("Affichage de l 'étudiant " + i);
    console.log(etudiants[i].prenom);
    console.log(etudiants[i].nom);
    console.log(etudiants[i].note);
}
console.log("-----------------------------------------");
etudiants.sort((a, b) => a.note - b.note);

for (let i = 0; i < etudiants.length; i++) {
    console.log("Affichage de l 'étudiant " + i);
    console.log(etudiants[i].prenom);
    console.log(etudiants[i].nom);
    console.log(etudiants[i].note);
}
console.log("-----------------------------------------");
etudiants.sort((a, b) => a.prenom.localeCompare(b.prenom));

for (let i = 0; i < etudiants.length; i++) {
    console.log("Affichage de l 'étudiant " + i);
    console.log(etudiants[i].prenom);
    console.log(etudiants[i].nom);
    console.log(etudiants[i].note);
}

console.log("-----------------------------------------");
etudiants.sort((a, b) => {
    let comparaison = a.prenom.localeCompare(b.prenom);
    // si je suis capable de déterminer le tri avec le prénom, on s'arrête là et on restitue l'information
    if(comparaison !=0) {return comparaison;}
    // en revanche, si la comparaison vaut 0, ça veut dire que les 2 étudiants ont le même prénom, on utilise donc le nom
    return a.nom.localeCompare(b.nom);
    });

for (let i = 0; i < etudiants.length; i++) {
    console.log("Affichage de l 'étudiant " + i);
    console.log(etudiants[i].prenom);
    console.log(etudiants[i].nom);
    console.log(etudiants[i].note);
}

console.log("--ordre par ordre décroissant---------------------------------------");
etudiants.sort((a, b) => {
    let comparaison = b.prenom.localeCompare(a.prenom);
    // si je suis capable de déterminer le tri avec le prénom, on s'arrête là et on restitue l'information
    if(comparaison !=0) {return comparaison;}
    // en revanche, si la comparaison vaut 0, ça veut dire que les 2 étudiants ont le même prénom, on utilise donc le nom
    return b.nom.localeCompare(a.nom);
    });

for (let i = 0; i < etudiants.length; i++) {
    console.log("Affichage de l 'étudiant " + i);
    console.log(etudiants[i].prenom);
    console.log(etudiants[i].nom);
    console.log(etudiants[i].note);
}

console.log("-----------------------------------------");
etudiants[0].note = 12;

console.log(etudiants[0]);