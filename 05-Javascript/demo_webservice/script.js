let choix_ville_element = document.getElementById("choix_ville");

chargerCommunes();

function chargerCommunes() {
    fetch("https://geo.api.gouv.fr/communes?limit=50")
        .then(responseHTTP => responseHTTP.json())
        .then(contenuJSON => genererOptions(contenuJSON));
}

function genererOptions(contenuJSON) {
    contenuJSON.forEach(commune => {
        let option_element = document.createElement("option");
        option_element.value=commune.nom;
        option_element.innerText=commune.nom;

        choix_ville_element.appendChild(option_element);
    });
}