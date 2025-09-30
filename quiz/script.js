const questions =[
  {
    questions:"Which is the largest animal in the world?",
    answers:[
      {text:"Shark", correct:false},
      {text:"Blue Whale", correct:true},
      {text:"Elephant", correct:false},
      {text:"Giraffe", correct:false}
    ]
  },
  {
    questions:"Which is the fastest land animal?",
    answers:[
      {text:"Cheetah", correct:true},
      {text:"Lion", correct:false},
      {text:"Horse", correct:false},
      {text:"Ostrich", correct:false}
    ]
  },
  {
    questions:"Which is the largest continent by area?",
    answers:[
      {text:"Africa", correct:false},
      {text:"Asia", correct:true},
      {text:"Europe", correct:false},
      {text:"Antarctica", correct:false}
    ]
  },
   {
    questions:"Which planet is known as the Red Planet?",
    answers:[
      {text:"Earth", correct:false},
      {text:"Mars", correct:true},
      {text:"Jupiter", correct:false},
      {text:"Venus", correct:false}
    ]
  },
   {
    questions:"What is the hardest natural substance on Earth?",
    answers:[
      {text:"Gold", correct:false},
      {text:"Iron", correct:false},
      {text:"Diamond", correct:true},
      {text:"Platinum", correct:false}
    ]
  }
   
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.questions;
  
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
   
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
     button.addEventListener("click",SelectAnswer);
  });
}
function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function SelectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",()=>{{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
}});

startQuiz();