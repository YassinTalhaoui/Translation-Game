/**
 *  retrieve the id of the chosen quiz
 * and prints  this id in the console.
 */
function getId() {
    let nom = new
        URL(location.href).searchParams.get("quizId");
    console.log(nom);

}

