fetch('quiz.json')
  .then(autruche => { /* Une fois que le fichier est chargé */
    return autruche.json();  /* Convertissons le en json */
  })
  .then(data => { /* Une fois le fichier converti */
    listQ = data;
    affichage(compteur);
    return listQ;
  });

var listQ;
var CBR = 0;
var AC;
var AQ;
var AR;
var AE;
var AS;
var ARE;
var a;
var d;
var question;
var compteur = 0;

var affichage = function (index) {
  question = listQ[index];
  AQ = document.getElementById('questions');
  AC = document.getElementById('reponses');
  AE = document.getElementById('explications');
  AS = document.getElementById('score');
  ARE = document.getElementById('restart');
  AQ.innerHTML = "";
  AC.innerHTML = "";
  AE.innerHTML = "";
  AQ.innerHTML = "Q" + (index + 1) + " * " + question.question;
  for (let c = 0; c < question.choices.length; c++) {
    var d = question.choices[c];
    AC.innerHTML += "<div><button  id='" + c + "' value= " + c + " onclick=reponse('" + c + "')>" + d + "</button></div>";
  }
}

var reponse = function (reponseChoisie) {
  var buttons = document.querySelectorAll("button");
  for (let michel = 0; michel < buttons.length; michel++) {
    buttons[michel].disabled = true;
  }
  if (question.choices[reponseChoisie] == question.correct) {
    var Reponsecorrecte = document.getElementById(reponseChoisie)
    Reponsecorrecte.setAttribute("id", "correct") // afficher en vert la bonne réponse
    CBR++
  } else {
    var Reponsefausse = document.getElementById(reponseChoisie)
    Reponsefausse.setAttribute("id", "faux") //   afficher en rouge la réponse
    for (let patrick = 0; patrick < question.choices.length; patrick++) {
      if (question.choices[patrick] == question.correct) {
        var Reponsejuste = document.getElementById(patrick)
        Reponsejuste.setAttribute("id", "correct")  //   afficher en vert la bonne réponse
      }
    }
  }
  AE.innerHTML = "Explication : " + question.explanation;
  AS.innerHTML = " Score : " + CBR + "/" + listQ.length;

  // if (compteur < listQ.length) {
  //   console.log(CBR)
  //   setTimeout(affichage, 2000, compteur);
  // } else {
  //   console.log(compteur)
  //   $('#refresh').on('click', function() {
  //     location.reload();
  // });
  // }
}