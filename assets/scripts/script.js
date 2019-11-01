let introductionSection = document.getElementById('introductionSection');
let questionSection = document.getElementById('questionSection');
let resultsSection = document.getElementById('resultsSection');
let scoreList = document.getElementById('scoreList');

let nameInput = document.getElementById('nameInput');

let startQuizButton = document.getElementById('startQuizButton');
let answerButton = [];
for(let i = 0; i < 4; i++) {
  answerButton[i] = document.getElementById('answerButton' + i);
}
let submitScore = document.getElementById('submitScore');

let questionText = document.getElementById('questionText');
let timerText = document.getElementById('timerText');
let scoreText = document.getElementById('scoreText');

defaultPage();

let questionIndex = 0;
let timeInitial = 50;
let time;
let finalScore;

function defaultPage() {
  introductionSection.style.display = 'block';
  questionSection.style.display = 'none';
  resultsSection.style.display = 'none';

  startQuizButton.addEventListener('click', startQuiz);
  for(let i = 0; i < 4; i++) {
    answerButton[i].addEventListener('click', nextQuestion);
  }
}

function startQuiz() {
  introductionSection.style.display = 'none';
  questionSection.style.display = 'block';

  showQuestion(questionIndex);
  timer();
  
  time = setInterval(timer, 1000);
}

function timer() {
  timeInitial--;
  timerText.textContent = "Time: " + timeInitial;
}

function showQuestion() {
  questionText.textContent = questions[questionIndex].title;
  for(let i = 0; i < questions[questionIndex].choices.length; i++) {
    answerButton[i].textContent = questions[questionIndex].choices[i];
  }
}

function nextQuestion() {
  if(questionIndex < questions.length - 1) {
    questionIndex++;
    showQuestion(questionIndex);
  } else {
    getResults();
  }
}

function getResults() {
  questionSection.style.display = 'none';
  resultsSection.style.display = 'block';
  finalScore = timeInitial;

  scoreText.textContent = "Final Score: " + finalScore;

  for (let i = 0; i < localStorage.length; i++) {
    let name = localStorage.key(i);
    let value = localStorage.getItem(name);
    scoreList.innerHTML += "<div>" + name + " " + value + " </div>";
  }

  submitScore.addEventListener('click', storeScore);
}

function storeScore() {
  let name = nameInput.value;
  localStorage.setItem(name, finalScore);

  scoreList.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    let name = localStorage.key(i);
    let value = localStorage.getItem(name);
    scoreList.innerHTML += "<div>" + name + " " + value + " </div>";
  }
}