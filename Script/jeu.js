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

var nbQuest = 1;
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

            question = data[i].questions[nbQuest - 1].question;
            console.log(data[i].questions.length)
            $("#question").text(question);
        }
        // if (i == 1) {
        $("#number").text("Question " + nbQuest);
        // }
        i++;
    }

}



/**
 * displays the different buttons 
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
            extras = data[i].questions[k].extras;
            // let k = 0;
            // let j = 0;
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

//console.log(answer);
/**
 * allows you to move the clicked button in or 
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

let nom = new
    URL(location.href).searchParams.get("quizId");
let i = 0;
//let answer;
while (i < data.length) {
    if (nom == data[i].id) {
        let k = 0;
        let j = 0;
        answer = data[i].questions[j].answer;
        extras = data[i].questions[k].extras;
    }
    i++;
}

/*function shuffle(array) {
    /*let nom = new
    URL(location.href).searchParams.get("quizId");
    let i = 0;
   // let answer;
    while (i < data.length) {
        if (nom == data[i].id) {
            let k = 0;
            let j = 0;
            answer = data[i].questions[j].answer;
            extras = data[i].questions[k].extras;*/

// question = data[i].questions[0].answer;


/* let counter = array.length;
 while (counter > 0) {
     let index = Math.floor(Math.random() * counter);
     counter--;
     // Swap positions counter and index in the array.
     [array[counter], array[index]] = [array[index], array[counter]];
 }
}
// i++;
// }
//}
shuffle(answer);*/


/**
 * Shuffles the given array.
 * @param {*} array 
 */
function shuffle(array) {
    let nom = new
        URL(location.href).searchParams.get("quizId");
    let i = 0;
    let answer;
    while (i < data.length) {
        if (nom == data[i].id /*&& description == data[i].description*/) {

            //  let question = data[i].questions[0].answer;
            //array = question.split(" ");

            let counter = array.length;
            while (counter > 0) {
                let index = Math.floor(Math.random() * counter);
                counter--;
                // Swap positions counter and index in the array.
                [array[counter], array[index]] = [array[index], array[counter]];
            }
        }
        i++;
    }
}

//shuffle(answer);
//shuffle(extras);


/**
 * Cheks that the given answer is correct.
 */
function verification() {
    /// let answer;
    let nom = new
        URL(location.href).searchParams.get("quizId");
    let i = 0;
    while (i < data.length) {
        if (nom == data[i].id) {
            // answer = data[i].questions[0].answer;
            var elm = $("#verification");
            var phrase;
            $("#button").click(function () {
                $("#button").hide();
                $(".btr").off("click");
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
                if (concatenatedAnswer == phrase) {
                    $("#button").click(function () {
                        $("#button").hide();
                        $(".btr").off("click");
                        $(".btn").off("click");
                        elm.html("Bravo!!!!!!!!!!!!!!!!");
                        document.getElementById('verification').style.border = 'solid';
                        document.getElementById('verification').style.marginTop = '0px';
                        document.getElementById('verification').style.backgroundColor = 'green'
                        document.getElementById('verification').style.width = "1200px"
                    });

                }

            });

        }
        i++;
    }

}

/**
 * moves on to the next question.
 */
/*function nextQuestion(){
   
    let nom = new
    URL(location.href).searchParams.get("quizId");
let i = 0;
    while (i < data.length) {
        if (nom == data[i].id /*&& description == data[i].description*///) {

/* let question = data[i].questions[0].question;
 console.log(data[i].questions.length)
 $("#question").text(question);*/



/*  $("#nextQuestion").click(function(){
      $("#number").text("Question " + nbQuest++);
      $("#button").show();
      document.getElementById('verification').style.visibility = 'hidden';
      question = data[i].questions[nbQuest-1].question;
     // console.log(data[i].questions.length)
      $("#question").text(question);
  
      //askQuestion();
  
  });
}
  i++;
}      
}*/


function nextQuestion() {
    $("#nextQuestion").click(function () {
        let nom = new
            URL(location.href).searchParams.get("quizId");
        let i = 0;
        while (i < data.length) {
            if (nom == data[i].id /*&& description == data[i].description*/) {
                $("#button").show();
                document.getElementById('verification').style.visibility = 'hidden';
                question = data[i].questions[nbQuest - 1].question;
                // console.log(data[i].questions.length)
                $("#question").text(question);
                $("#number").text("Question " + nbQuest++);
                $(".btr").hide();
                $(".btn").hide();
                let k = 0;
                let j = 0;
                k++;
                j++;
                answer = data[i].questions[j].answer;
                extras = data[i].questions[k].extras;
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
                moveToAnswer();
                verification();
            }
            i++;
        }
    });
}




