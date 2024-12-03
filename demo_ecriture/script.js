// 1ere étape : je récupère les références vers mon doc html
let conteneur_element = document.getElementById("conteneur");
let mon_texte_element = document.getElementById("mon_texte");
let mon_formulaire_element = document.getElementById("mon_formulaire");
let saisie_element=document.getElementById("saisie");
let saisie_bonne_pratique_element = document.getElementById("saisie_bonne_pratique");

// 2ème étape : je crée les fonctions utilisées par mon html
function ajouterTexte() {
    let p_element = document.createElement("p");
    p_element.innerHTML = saisie_element.value;// utiliser innerText au lieu InnerHTML
    saisie_element.value = "";

    conteneur_element.appendChild(p_element);
}

function changerCouleur() {
    if (mon_texte_element.classList.contains("rouge")) {
        mon_texte_element.classList.remove("rouge");
        mon_texte_element.classList.add("jaune");
    } else if (mon_texte_element.classList.contains("jaune")) {
        mon_texte_element.classList.remove("jaune");
        mon_texte_element.classList.add("bleue");
    } else {
        mon_texte_element.classList.remove("bleue");
        mon_texte_element.classList.add("rouge");
    }

}

function cacher() {
    if(mon_formulaire_element.classList.contains("cache")){
        mon_formulaire_element.classList.remove("cache");
    }else{
        mon_formulaire_element.classList.add("cache");
    }
}

function afficherPrompt() {
    let prenom = prompt("Comment vous appelez-vous ?");
    alert("vous vous appelez " + prenom);

    if(confirm("voulez-vous supprimer ?")){
        alert("suppression confirmée")
    }
}

// Utilisation du addEvenListener pour associer une fonction à un événement HTML

saisie_bonne_pratique_element.addEventListener("input",afficherInput);

function afficherInput(event) {
    console.log(event.target.value);
}