// une variable qui contient plusieurs informations
let etablissements =["maternelle", "primaire", "collège"];

// boucle foreach pour parcourir 1 à 1 les éléments du tableau (avec utilisation d'une fonction fléchée)
etablissements.forEach( etablissement => {
    console.log(etablissement);
});

// boucle foreach pour parcourir 1 à 1 les éléments du tableau (avec utilisation d'une fonction classique)
etablissements.forEach( afficherEtablissement);

function afficherEtablissement (etablissement) {
    console.log(etablissement);
}

etablissements.push("Lycée");
etablissements.forEach( afficherEtablissement);

console.log(etablissements[1]); // affichage du 2ème élément du tableau
etablissements[1]= "élémentaire"; // J'écrase la 2ème valeur du tableau avec "élémentaire"
console.log(etablissements[1]); // affichage du 2ème élément du tableau

console.log("---------------------------------");
console.log(etablissements);
etablissements[15] = "fac"; // à ne pas faire
console.log(etablissements);

// etablissements[-1] = "n'importe quoi";  // à ne pas faire
// console.log(etablissements);

console.log(etablissements.pop());
console.log(etablissements.shift());

// afficher les éléments avec la lettre c
console.log(etablissements.filter(
    e => e.includes("c")
)
);

// trie par défaut des chaines de caractères JS : majuscule, puis miniscules, puis caractères spéciaux
etablissements.sort(); // trie selon l'UTF-8 'ASCII
console.log(etablissements);



