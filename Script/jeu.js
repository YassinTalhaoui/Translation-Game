/**
 * retrieves the id of the chosen quiz
 * and prints  this id in the console.
 */
function getId() {
    let nom = new
        URL(location.href).searchParams.get("quizId");
    console.log(nom);

}

/**
 * retrieves the description of the quiz and prints it.
 */
function getDescription() {
    let description;
    let nom = new
        URL(location.href).searchParams.get("quizId");
    let i = 0;
    while (i < data.length) {
        if (nom == data[i].id) {
            description = data[i].description;
            $("#Description").text("Quiz sur le théme :" + description)
        }
        i++;

    }
}

/**
 * Asks the question 
 */
function askQuestion() {
    let question;
    let nom = new
        URL(location.href).searchParams.get("quizId");
    let i = 0;
    while (i < data.length) {
        if (nom == data[i].id /*&& description == data[i].description*/) {
            question = data[i].questions[0].question;
            $("#question").text(question);
        }
        if (i == 1) {
            $("#number").text("Question " + i);
        }
        i++;
    }
}

/**
 * displays the different buttons 
 * with the different words to place.
 */
function btn() {
    let extras;
    let answer;
    let nom = new
        URL(location.href).searchParams.get("quizId");
    let i = 0;
    while (i < data.length) {
        if (nom == data[i].id) {
            answer = data[i].questions[0].answer;
            extras = data[i].questions[0].extras;
            let k = 0;
            let j = 0;
            for (j; j < answer.split(" ").length; j++) {
                var btn = document.createElement("BUTTON");        // Créer un élément <button>
                var t = document.createTextNode(answer.split(" ")[j]);        // Créer un noeud textuel
                btn.appendChild(t);
                btn.className = "btn";                             // Ajouter le texte au bouton
                btn.type = "button";
                document.getElementById("buttons").appendChild(btn);
            }
            for (k; k < extras.split(" ").length; k++) {
                var btn = document.createElement("BUTTON");        // Créer un élément <button>
                var t = document.createTextNode(extras.split(" ")[k]);        // Créer un noeud textuel
                btn.appendChild(t);
                btn.className = "btn";                                // Ajouter le texte au bouton
                btn.type = "button";
                document.getElementById("buttons").appendChild(btn);

            }
        }
        i++;
    }
}



/**
 * allows you to move the clicked button in or 
 * out of the solution to remove it from the solution.
 */

function moveToAnswer() {

    $(document).ready(function () {
        $(".btn").click(function () {
            console.log(this);
            $(this).appendTo("#zone");
            $(this).off("click");

        });

    });


}
/**
 * 
 */
function moveToSt() {

    $(".btn").click(function () {
        $(this).appendTo("#buttons");

    });


}

/*function shuffle(array) {
let i =0;
    while (i < data.length) {

        //array = data[0].questions[i].answer.split(" ");
     let counter = array.length;
     while (counter > 0) {
     let index = Math.floor(Math.random() * counter);
     counter--;
     // Swap positions counter and index in the array.
     [array[counter], array[index]] = [array[index], array[counter]];
     }


i++;
}
}*/
