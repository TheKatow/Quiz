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
  ARE.innerHTML = "";
  AQ.innerHTML = "Q" + (index+1) + " * " + question.question;
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
  // console.log("Reponse choisie : " + question.choices[reponseChoisie]);
  // console.log("Reponse correcte : " + question.correct);
  // AE.innerHTML = question.explanation;
  if (question.choices[reponseChoisie] == question.correct) {
    var Reponsecorrecte = document.getElementById(reponseChoisie)
    Reponsecorrecte.setAttribute("id", "correct") // afficher en vert la bonne réponse
    CBR++
    // AE.innerHTML = " bravo la bonne réponse était bien " + question.choices[reponseChoisie];
  } else {
    // AE.innerHTML = "la bonne réponse était " + question.correct;
    var Reponsefausse = document.getElementById(reponseChoisie)
    Reponsefausse.setAttribute("id", "faux") //   afficher en rouge la réponse
    for (let patrick = 0; patrick < question.choices.length; patrick++) {
      if (question.choices[patrick] == question.correct) {
        var Reponsejuste = document.getElementById(patrick)
        Reponsejuste.setAttribute("id", "correct")  //   afficher en vert la bonne réponse
      }
    }
  }
  compteur++;
  AE.innerHTML = "Explication : " + question.explanation;
  AS.innerHTML = " Score : " + CBR + "/" + listQ.length;
  // RESTART = index[0];
  // AS.innerHTML = "<div><button value='" + RESTART + "' onclick=restart >" + RESTART + "</button></div>" ;

  if (compteur < listQ.length) {
    setTimeout(affichage, 3000, compteur);
  } else{
    
  }
}