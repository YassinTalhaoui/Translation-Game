var nb = 0;
var nbQuest = 1;
/**
 * Retrieves the id of the chosen quiz
 * and prints  this id in the console.
 */
function getId() {
    let nom = new
        URL(location.href).searchParams.get("quizId");
    console.log(nom);

}

/**
 * Retrieves the description of the quiz and prints it.
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
        if (nom == data[i].id) {
            question = data[i].questions[nbQuest - 1].question;
            console.log(data[i].questions.length)
            $("#question").text(question);
        }
        $("#number").text("Question " + nbQuest);

        i++;
    }

}

/**
 * Displays the different buttons 
 * with the different words to place.
 */
function btn() {
    let nom = new
        URL(location.href).searchParams.get("quizId");
    let i = 0;
    while (i < data.length) {
        if (nom == data[i].id) {
            let k = 0;
            let j = 0;
            answer = data[i].questions[j].answer;
            let a = answer.split(" ");
            shuffle(a);
            extras = data[i].questions[k].extras;
            let b = extras.split(" ");
            shuffle(b);
            for (j; j < answer.split(" ").length; j++) {
                var btn = document.createElement("BUTTON");        // Créer un élément <button>
                var t = document.createTextNode(a[j]);        // Créer un noeud textuel
                btn.appendChild(t);
                btn.className = "btn";                             // Ajouter le texte au bouton
                btn.type = "button";
                document.getElementById("buttons").appendChild(btn);
            }
            for (k; k < extras.split(" ").length; k++) {
                var btn = document.createElement("BUTTON");        // Créer un élément <button>
                var t = document.createTextNode(b[k]);        // Créer un noeud textuel
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
 * Allows you to move the clicked button in or 
 * out of the solution to remove it from the solution.
 */
function moveToAnswer() {
    $(".btn").click(function () {
        console.log($(this).text());
        $(this).appendTo("#zone");
        $(this).removeClass("btn");
        $(this).addClass("btr");
        $(this).off('click');
        $(".btr").click(function () {
            $(this).off('click');
            $(this).removeClass("btr");
            $(this).addClass("btn");
            $(this).appendTo("#buttons");
        })
    });
}

/**
 * Shuffle the array.
 ∗ @param {∗[]} array the array to shuffle.
 */
function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        // Swap positions counter and index in the array.
        [array[counter], array[index]] = [array[index], array[counter]];
    }
}

/**
 * Cheks that the given answer is correct.
 */
function verification() {
    let nom = new
        URL(location.href).searchParams.get("quizId");
    let i = 0;
    while (i < data.length) {
        if (nom == data[i].id) {
            var elm = $("#verification");
            var phrase;
            $("#button").click(function () {
                $("#button").hide();
                $(".btr").off("click");
                $(".btr").text("");
                $(".btn").off("click");
                elm.html(answer);
                document.getElementById('verification').style.border = 'solid';
                document.getElementById('verification').style.marginTop = '0px';
                document.getElementById('verification').style.backgroundColor = 'red'
                document.getElementById('verification').style.width = "1200px"
            });
            $(".btn").click(function () {
                var reponse = $(".btn").text();
                console.log(reponse);
                phrase = $(".btr").text();
                console.log(phrase);
                var concatenatedAnswer = answer.replace(/ /g, "");
                console.log(concatenatedAnswer);
                if (concatenatedAnswer == phrase && concatenatedAnswer.length == phrase.length) {
                    $("#button").click(function () {
                        $("#button").hide();
                        $(".btr").off("click");
                        $(".btr").text("");
                        $(".btn").off("click");
                        elm.html("BRAVO!!!!!!!!!!!!!!!!");
                        document.getElementById('verification').style.border = 'solid';
                        document.getElementById('verification').style.marginTop = '0px';
                        document.getElementById('verification').style.backgroundColor = 'green'
                        document.getElementById('verification').style.width = "1200px"

                    });
                    nb++;

                }

            });

        }
        i++;
    }

}

/**
 * Moves on to the next question.
 */
function nextQuestion() {
    $("#nextQuestion").click(function () {
        let nom = new
            URL(location.href).searchParams.get("quizId");
        let i = 0;
        while (i < data.length) {
            console.log(i);
            if (nom == data[i].id) {
                $("#button").show();
                nbQuest++;
                question = data[i].questions[nbQuest - 1].question;
                $("#question").text(question);
                $("#number").text("Question " + nbQuest);
                answer = data[i].questions[nbQuest - 1].answer;
                let a = answer.split(" ");
                shuffle(a);
                extras = data[i].questions[nbQuest - 1].extras;
                let b = extras.split(" ");
                shuffle(b);
                $(".btr").hide();
                $(".btn").hide();
                let k = 0;
                let j = 0;
                for (j; j < answer.split(" ").length; j++) {
                    var btn = document.createElement("BUTTON");        // Créer un élément <button>
                    var t = document.createTextNode(a[j]);        // Créer un noeud textuel
                    btn.appendChild(t);
                    btn.className = "btn";                             // Ajouter le texte au bouton
                    btn.type = "button";
                    document.getElementById("buttons").appendChild(btn);
                }
                for (k; k < extras.split(" ").length; k++) {
                    var btn = document.createElement("BUTTON");        // Créer un élément <button>
                    var t = document.createTextNode(b[k]);        // Créer un noeud textuel
                    btn.appendChild(t);
                    btn.className = "btn";                                // Ajouter le texte au bouton
                    btn.type = "button";
                    document.getElementById("buttons").appendChild(btn);

                }
                moveToAnswer();
                verification();

            }

            i++;
        }

    });

}

/**
 * Changes Quiz
 */
function changeQuiz() {
    $("#otherQuiz").click(function () {
        window.open("pageDeGarde.html");
    })
    $("#Replay").click(function () {
        location.reload();
    })
}

/**
 * Gives the result of the game.
 */
function result() {
    $("#res").click(function () {
        let nom = new
            URL(location.href).searchParams.get("quizId");
        let i = 0;
        while (i < data.length) {
            if (nom == data[i].id) {

                $("#result").text("Vous avez reussi " + nb + " questions sur " + data[i].questions.length);
            }
            i++;

        }

    })
}

