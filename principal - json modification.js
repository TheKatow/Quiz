fetch('quiz.json')
  .then(autruche => { /* Une fois que le fichier est chargé */
    return autruche.json();  /* Convertissons le en json */
  })
  .then(data => { /* Une fois le fichier converti */
    listQ = data;
    affichage(compteur);
    return listQ;

    // questionnaire(data); /* Appelons notre fonction */
  });
var listQ;
// listQ = new Array();
var CBR = 0;
var AC;
var AQ;
var AR;
var AE;
var a;
// var b = 0;
var d;
var question;
var compteur = 0;

// var questionnaire = function (data) {
//   for (a = 0; a < data.length; a++) {

//     listQ.push(data[a]);
//     // listC.push(data[a].choices);
//     // listR.push(data[a].correct);
//     // listE.push(data[a].explanation);

//   }
//   // affichage(compteur);
// }

var affichage = function (index) {

  question = listQ[index];


  AQ = document.getElementById('questions');
  AC = document.getElementById('reponses');
  AE = document.getElementById('explications');
  AQ.innerHTML = "";
  AC.innerHTML = "";
  AE.innerHTML = "";
  AQ.innerHTML = question.question;
  for (let c = 0; c < question.choices.length; c++) {
    var d = question.choices[c];
    AC.innerHTML += "<button  id='" + d + "' value= " + d + " onclick=reponse('" + d + "')>" + d + "</button>";
    console.log(AC);
  }
}

var reponse = function (reponseChoisie) {
  var buttons = document.querySelectorAll("button");
  for (let michel = 0; michel < buttons.length; michel++) {
    buttons[michel].disabled = true;
  }
  console.log("Reponse choisie : " + reponseChoisie);
  console.log("Reponse correcte : " + question.correct);
  AE.innerHTML = question.explanation;
  if (reponseChoisie == question.correct) {
    var Reponsecorrecte = document.getElementById(reponseChoisie)
    Reponsecorrecte.setAttribute("id", "correct") // afficher en vert la bonne réponse
    CBR++
    AE.innerHTML = " bravo la bonne réponse était bien " + reponseChoisie;
  } else {
    AE.innerHTML = "la bonne réponse était " + question.correct;
    var Reponsefausse = document.getElementById(reponseChoisie)
    Reponsefausse.setAttribute("id", "faux") //   afficher en rouge la réponse
    for (let patrick = 0; patrick < question.choices.length; patrick++) {
      if (question.choices[patrick] == question.correct) {
        var Reponsejuste = document.getElementById(question.choices[patrick])
        Reponsejuste.setAttribute("id", "correct")  //   afficher en vert la bonne réponse
        
      }
    }
  }
  compteur++;
  AE.innerHTML = " Score : " + CBR + "<br>" +  question.explanation;
  if (compteur < listQ.length) {
    setTimeout(affichage, 3000, compteur);
  }
  else {

  }
  
}


