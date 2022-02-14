
var quizList = new Array();

chargeInfoJSON = function () {
    fetch('quiz.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            createQuizz(data);
            console.dir(data);
        });
}

var createQuizz = function (data) {

    for (var i = 0; i < data.length; i++) {
        let quizz = data[i];
        quizList.push(quizz);
        if (quizList.indexOf(quizz) == -1) {
            quizList.push(quizz);
            console.log(quizList);
        }
    }
}


const questions = quizList;

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const explainElement = document.getElementById('explain');
const scoreElement = document.getElementById('score');


let shuffledQuestions, currentQuestionIndex, score = 0, currentCounter = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.choices.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        if (answer === question.correct) {
            ;
            button.dataset.correct = question.correct;
        }
        button.addEventListener('click', selectAnswer);
        explainElement.classList.add('hide');
        explainElement.innerText = question.explanation;
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    explainElement.classList.remove('hide');
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        resetState()
        explainElement.classList.add('hide');
        questionElement.classList.add('hide');
        scoreElement.classList.remove('hide');
        scoreElement.innerText = 'Vous avez ' + ((score / quizList.length) * 100) / 2 + '% de bonnes réponses.';
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');

    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
        score = score + 1;
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

