function description() {
    document.monFormulaire.quizId.options.length = data.length;
    for (var i = 0; i < data.length; i++) {

        document.monFormulaire.quizId.options[i].value = data[i].description;
        document.monFormulaire.quizId.options[i].text = data[i].description;
        if (i == 0) {
            document.monFormulaire.quizId.options[i].value = data[i].id;
        } else if (i == 1) {
            document.monFormulaire.quizId.options[i].value = data[i].id;
        } else if (i == 2) {
            document.monFormulaire.quizId.options[i].value = data[i].id;
        } else if (i == 3) {
            document.monFormulaire.quizId.options[i].value = data[i].id;
        }

    }
}

