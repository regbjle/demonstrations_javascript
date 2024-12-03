let texte_element = document.getElementById("texte");
let texte_sauvegarde_element = document.getElementById("texte_sauvegarde");
let interval = 10000;
let timeout = 60000;


setInterval(() => {
    p_element = document.createElement('p');
    p_element.innerText = texte_element.value;
    texte_sauvegarde_element.appendChild(p_element); 
    
    setTimeout(() => {
        alert("Nombre de caractères tapés par minute :" + p_element.innerText.length);
    }, timeout);

}, interval);


