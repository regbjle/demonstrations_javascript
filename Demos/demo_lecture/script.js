// lecture grace à l'identifiant
let description_element = document.getElementById("description");

// lecture grace au selecteur CSS

// Recherche "le premier élément de classe div1" 
let div1_element = document.querySelector(".div1");

// Recherche tous les éléments dont la  classe est div1" 
let div1_element_bis = document.getElementsByClassName("div1");

// Recherche "le premier élément dans le bloc de classe div1" 
let div1_h2_element = document.querySelector(".div1 > h2");

// Recherche "toutes les balises p dans le bloc de classe div1" 
let div1_p_elements = document.querySelectorAll(".div1 > p");

// Recherche "toutes les balises p"
let p_elements = document.getElementsByTagName("p");
console.log(p_elements);

console.log(description_element.innerText);
console.log(div1_element.innerText);
console.log(div1_h2_element.innerText);

div1_p_elements.forEach(e => console.log(e.innerText));

for(let element of p_elements) {
    console.log(element.innerText);
}
//p_elements.forEach(e => console.log(e.innerText));
