let conteneur_element=document.getElementById("conteneur");

fetch("contenu.json") // je lis le contenu du fichier contenu.json
    .then(responseHTTP => responseHTTP.json()) //lorsque la lecture est terminée, j'extrais le contenu json
    .then(contenuJSON => afficherTableau(contenuJSON)); // Puis, j'affiche le contenu JSON

function afficherTableau(contenuJSON){
    contenuJSON.forEach(ligne => {
        let tr_element = document.createElement("tr");
        let td_nom_element = document.createElement("td");
        let td_prenom_element = document.createElement("td");
        let td_camp_element = document.createElement("td");

        tr_element.appendChild(td_nom_element);
        tr_element.appendChild(td_prenom_element);
        tr_element.appendChild(td_camp_element);

        td_nom_element.innerText = ligne.nom;
        td_prenom_element.innerText = ligne.prenom;
        td_camp_element.innerText = ligne.camp;

        conteneur_element.appendChild(tr_element);

    });
}