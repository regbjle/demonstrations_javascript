let saisie1_element = document.getElementById("saisie1");
let saisie2_element = document.getElementById("saisie2");
let resultat_element = document.getElementById("resultat");
let select_element = document.getElementById("operation");

// Par défaut, l'opération a effectuer est une somme
let operation = additionner;

saisie1_element.addEventListener("input", calculerResultat);
saisie2_element.addEventListener("input", calculerResultat);
select_element.addEventListener("change", modifierOperateur);

function modifierOperateur() {
    switch (select_element.value) {
        case "+":
            operation = additionner;
            break;
        case "-":
            operation = soustraire;
            break;
        case "*":
            operation = multiplier;
            break;
        case "/":
            operation = diviser;
            break;
    }
    calculerResultat();
}

function calculerResultat() {
    if (isNaN(saisie1_element.value) || isNaN(saisie2_element.value)){
        resultat_element.innerText = 0;
    } else {
        let nb1 = parseInt(saisie1_element.value);
        let nb2 = parseInt(saisie2_element.value);
        resultat_element.innerText = operation(nb1, nb2);
    }
}

function additionner(nb1, nb2) {
    return nb1 + nb2;
}
function soustraire(nb1, nb2) {
    return nb1 - nb2;
}
function multiplier(nb1, nb2) {
    return nb1 * nb2;
}
function diviser(nb1, nb2) {
    return nb1 / nb2;
}