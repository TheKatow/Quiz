fetch('quiz.json')
  .then(retour => { /* Une fois que le fichier est chargé */
    return retour.json();  /* Convertissons le en json */
  })
  .then(data => { /* Une fois le fichier converti */

    questionnaire(data); /* Appelons notre fonction */
  });

listQ = new Array();
listC = new Array();
listR = new Array();
listE = new Array();
var AC;
var AQ;
var AR;
var AE;
var a;
var b = 0;
var d;
var question;
var compteur =0;

var questionnaire = function (data) {
  for (a = 0; a < data.length; a++) {
  
    listQ.push(data[a]);
    // listC.push(data[a].choices);
    // listR.push(data[a].correct);
    // listE.push(data[a].explanation);
      
  }
  affichage(compteur);
}

var affichage = function (index) {
  
question=listQ[index];


  AQ = document.getElementById('questions');
  AC = document.getElementById('reponses');
  AQ.innerHTML = question.question;
  for (let c = 0; c < question.choices.length; c++) {
    var d =question.choices[c];
    AC.innerHTML += "<button id= "+d+" value= "+d+" onclick=reponse('" + d + "')>" + d + "</button>";
    console.log(AC);
  }

  // selected.onclick = reponse;
}

var reponse = function (reponseChoisie) {
console.log("Reponse choisie : " + reponseChoisie);
console.log("Reponse correcte : " + question.correct);
if (reponseChoisie==question.correct) {
//   afficher en vert la bonne réponse

//   compteur de bonnes réponses
//   afficher l'explication
AC.innerHTML = "bravo la bonne réponse était bien"+ reponseChoisie;
} else {
AC.innerHTML = "la bonne réponse était"+ question.correct;
//   afficher en rouge la réponse
//   afficher en vert la bonne réponse
//   afficher l'explication
}
  compteur++;
}