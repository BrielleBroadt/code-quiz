// all variables
var startButton = document.querySelector("#start-button");
var inputBtn = document.querySelector("#input-btn");
var quizValue = document.querySelector("#quiz-value");
var timeEl = document.querySelector("#timer");
var questionLine = document.querySelector("#question");
var answerDiv = document.querySelector("#options");
var flashNote = document.querySelector("#notification");
var endScreen = document.querySelector("#finish-quiz");
var inputBox = document.querySelector("#input");
var inputForm = document.querySelector("#input-form");
var scoreboard = document.querySelector("#scoreboard");
var highScoresSection = document.querySelector("#highscore-section")
// questions for quiz
var questionList = [
{
    question:"What does the equal sign represent in JavaScript?",
    options: [
    "A: A grocery list",
    "B: Assignment operator",
    "C: A true false value",
    "D: Calling a function",
    ],
    answer: "B: Assignment operator",
},
{
    question: "What does an else-if statment do in JavaScript?",
    options: [
        "A: Allows to test for more than 1 condition",
        "B: Stands for Application Programming Interface",
        "C: Assists with Conditional Statements ",
        "D: Nothing, it applys to HTML "
    ],
    answer: "A: Allows to test for more than 1 condition",
},
{
    question:"How do you create a new directory in the terminal",
    options: [
        "A: touch",
        "B: git commit",
        "C: mkdir",
        "D: cd",
    ],
    answer: "C: mkdir",
},
{
    question:"What does box model describe",
    options: [
        "A: Elements space occupy on a screen",
        "B: Universal selector ",
        "C: Font family possibilities",
        "D: How to place a picture",
    ],
    answer: "A: Elemets space occupy on a screen" 
},
{
    question:"Which of the following assists with CSS building",
    options: [
        "A: W 3 schools",
        "B: Google",
        "C: Bootstrap",
        "D: Aldi",
    ],
    answer: "C: Bootstrap"
},
{
    question:"How do you get your application to adjust with size changes on different devices",
    options: [
        "A: for-loop",
        "B: media-screen",
        "C: border-box",
        "D: max-width",
    ],
    answer:"B: media-screen"
},
{
    question:"What is one way to style a box in CSS",
    options: [
        "A: Left-align",
        "B: Column",
        "C: Transform",
        "D: Font-weight",
    ],
    answer:"C: Transform"
},
];
var index = 0;
var noTime = 100;
var score = 0;
var flash;
var secondsLeft = 100;
// Timer
function setTime(){
    var timeInterval = setInterval(function(){
      secondsLeft --;
      timeEl.textContent = secondsLeft + "Count down."; 
      
      if(secondsLeft ===0){
        clearInterval(timeInterval);
        sendMessage ();
      }
      if (secondsLeft <= 0) {
        clearInterval(timeInterval);
        endGame();
      }
    },1000)  
   
      }
      
 function startGame () { 
    quizValue.classList.remove("hide");
    setTime();
    displayQuiz();
  };
  function displayQuiz () {
    questionLine.textContent = questionList[index].question;
  
    let answerQuestion = questionList[index].options;
    let answerLi = "";
    for (var i = 0; i < answerQuestion.length; i++) {
      answerLi += `
          <li>${answerQuestion[i]}</li>           
          `;
      answerDiv.innerHTML = answerLi;
    }
  };
  
  answerDiv.addEventListener("click", function(event) {
    event.preventDefault()
    if (event.target.matches("li")) {
      checkAnswer(event.target.textContent);
    }
  });
function checkAnswer(element) {
    var correctAnswer = questionList[index].answer;
  console.log (correctAnswer, element, score)
    if (element === correctAnswer) {
      clearTimeout(flash)
      flash = setTimeout(function(){
          flashNote.textContent = "Good job"
      },1000)
      score+=10;
    } else {
      clearTimeout(flash)
      timer -= 10;
      flash = setTimeout(function (){
          flashNote.textContent = "Incorrect"
      })
    }
    index++;
  
    if (questionList.length > index) {
      displayQuiz();
    } else {
      clearInterval(window.timerInerval);
      endQuiz();
    }
  };
  
  function endQuiz() {
    endScreen.classList.remove("hide");
  };
  
  function storeInit(event) {
    event.preventDefault();
    const initals = inputBox.value.trim();
    let scoreQuiz = JSON.parse(localStorage.getItem("scoreQuiz")) || [];
  
    let newScore = {
      initals: initals,
      score: score,
    };
  
    scoreQuiz.push(newScore);
  
    localStorage.setItem("scoreQuiz", JSON.stringify(scoreQuiz));
    highScoresSection.classList.remove("hide")
    inputBox.value = "";
  };
  
  function showScore(event) {
    event.preventDefault();
    scoreboard.classList.remove("hide");
    let showDemScores = JSON.parse(localStorage.getItem("scoreQuiz")) || [];
    let scoresList = "";
    for (var i = 0; i < showDemScores.length; i++) {
      scoresList += `
        
         <li>${showDemScores[i].initals} --- ${showDemScores[i].score}</li>
          
        `;
  
      scoreboard.innerHTML = scoresList;
    }
  };
  
  scoreboard.addEventListener("mouseover", showScore);
  inputBtn.addEventListener("click", storeInit);
  startButton.addEventListener("click", startGame);