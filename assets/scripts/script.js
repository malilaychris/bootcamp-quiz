let introductionSection = document.getElementById('introductionSection');
let questionSection = document.getElementById('questionSection');

let startQuizButton = document.getElementById('startQuizButton');
let answerButton = [];
for(let i = 0; i < 4; i++) {
  answerButton[i] = document.getElementById('answerButton' + i);
}

let questionText = document.getElementById('questionText');

defaultPage();

let questionIndex = 0;

function defaultPage() {
  introductionSection.style.display = 'block';
  questionSection.style.display = 'none';

  startQuizButton.addEventListener('click', startQuiz);
}

function startQuiz() {
  introductionSection.style.display = 'none';
  questionSection.style.display = 'block';

  showQuestion(questionIndex);
}

function showQuestion() {
  questionText.textContent = questions[questionIndex].title;
  for(let i = 0; i < questions[questionIndex].choices.length; i++) {
    answerButton[i].textContent = questions[questionIndex].choices[i];
  }
}

for(let i = 0; i < 4; i++) {
  answerButton[i].addEventListener('click', nextQuestion);
}

function nextQuestion() {
  questionIndex++;
  showQuestion(questionIndex);
}