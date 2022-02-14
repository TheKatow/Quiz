fetch('quiz.json')
  .then(retour => { /* Une fois que le fichier est chargé */
    return retour.json();  /* Convertissons le en json */
  })
  .then(data => { /* Une fois le fichier converti */

    questionnaire(data); /* Appelons notre fonction */
  });

var AQ;
var AC;
var listC = new Array();
var listQ = new Array();
var question;

var questionnaire = function (data) {

  for (let i = 0; i < data.length; i++) {
  listQ.push(data[i].question);
  console.log(listQ)
    

    let compteur = i + 1;
    question = data[i];
    AC = document.getElementById('reponses');
    AC.innerText = "";
  
    for (let j = 0; j < question.choices.length; j++) {
      listC.push(question.choices[j]);
      console.log(question.choices[j]);
      AC = document.getElementById('reponses');
      AC.innerHTML += "<button value='question.choices[j]' class='allButtons'>"
        + question.choices[j] + "</button>";

    }
    AQ = document.getElementById('questions');
    AQ.innerText = data[i].question + " question n°" + compteur;
    

  
};
}
function Validation_choix() {

  var valeur = document.getElementById('question.choices[j]').value;
  document.getElementById("reponses").value = valeur;

  if (question.correct == valeur) {
    console.log("bien joué");
  } else {
    console.log("perdu");
  }
}

var btnchoix = document.getElementsByClassName('allButtons');
btnchoix.addEventListener("click", Validation_choix, false);
