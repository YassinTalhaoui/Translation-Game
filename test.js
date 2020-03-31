/**
 * Prints quiz descriptions in the console
 */
function datas() {
    let i = 0;

    while (i < data.length) {
        console.log(data[i].description);
        i++;

    }
}
datas();



function d(){

   let answer = data[0].questions[0].answer;
    for(let j =0; j<answer.split(" ").length;j++){
var btn = document.createElement("BUTTON");        // Créer un élément <button>
var t = document.createTextNode(answer.split(" ")[j]);       // Créer un noeud textuel
btn.appendChild(t);                                // Ajouter le texte au bouton
document.body.appendChild(btn);  
    }
}
d();