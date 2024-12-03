let btn_ajouter_element = document.getElementById("btn_ajouter");
let conteneur_element = document.getElementById("conteneur");
let template_element = document.getElementById("note_template");

btn_ajouter_element.addEventListener("click", ajouterNote);

//  Pour répéter une action tous les intervalles données
setInterval(() => {
    ajouterNote();
}, 10000);

// Pour ajouter un délai sur une action (1 seule fois)
setTimeout(() => {
    alert("Bienvenur sur une page très utile !")
}, 5000);

function ajouterNote(){
    let clone = document.importNode(template_element.content, true);
    let div_element = clone.querySelector("div");
    let h2_element = clone.querySelector("h2"); // Je récupère le 1er h2 dans le clone
    let p_element = clone.querySelector("p"); //Je rcupère le 1er p dans le clone

    h2_element.innerText = "Une note très importante";
    p_element.innerText = "Pensez à signer la présence chez m2i sign !";
    div_element.style.backgroundColor = "#AF05AE";

    conteneur.appendChild(clone);
}