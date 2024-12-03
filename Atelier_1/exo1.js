let saisie_1_element=document.getElementById("saisie_1");
let saisie_2_element=document.getElementById("saisie_2");
let resultat_element=document.getElementById("resultat");

saisie_1_element.addEventListener("input", calculer);
saisie_2_element.addEventListener("input", calculer);

function calculer(){
if(isNaN(saisie_1_element.value)||isNaN(saisie_2_element.value)){
    resultat_element.innerText = 0;
}else{
    resultat_element.innerText = parseInt(saisie_1_element.value) + parseInt(saisie_2_element.value);
    console.log(resultat_element.innerText);
}
}