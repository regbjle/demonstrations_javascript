let titre_note_element = document.getElementById("titre_note");
let note_element = document.getElementById("note");
let couleur_element = document.getElementById("couleur");
let bouton_enregistrer_element = document.getElementById("bouton_enregistrer");
let div2_element = document.getElementById("div2");

bouton_enregistrer_element.addEventListener("click", creer_note);

function creer_note(){
    if(titre_note_element.value==""||note_element.value==""){
        alert("Vous devez enregistrer une titre et le détail de la note avant de l'enregistrer");
    }else{
    let new_div =  document.createElement('div');
    let new_titre =  document.createElement('h2');
    let new_note = document.createElement('p');
    let suppression = document.createElement('p');

    div2_element.appendChild(new_div);
    new_div.appendChild(new_titre);
    new_div.appendChild(suppression);
    new_div.appendChild(new_note);
    new_div.style.backgroundColor = couleur_element.value;

    new_titre.innerText=titre_note_element.value;
    suppression.innerHTML="&#10007;";
    suppression.classList.add("supprimer_note");
    new_note.innerText=note_element.value;

    suppression.addEventListener("click", supprimer_note);
    }
}

function supprimer_note(event) {
    event.target.parentElement.remove();
}