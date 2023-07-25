// all variables
var startButton = document.querySelector("#start-button");
var inputBtn = document.querySelector("#input-btn");
var quizValue = document.querySelector("#quiz");
var timer = document.querySelector("#timer");
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
    answer: "Assignment operator",
},
{
    question: "What does an else-if statment do in JavaScript?",
    options: [
        "A: Allows to test for more than 1 condition",
        "B: Stands for Application Programming Interface",
        "C: Assists with Conditional Statements ",
        "D: Nothing, it applys to HTML "
    ],
    answer: "Allows to test for more than 1 condition",
},
{
    question:"How do you create a new directory in the terminal",
    options: [
        "A: touch",
        "B: git commit",
        "C: mkdir",
        "D: cd",
    ],
    answer: "mkdir",
},
{
    question:"What does box model describe",
    options: [
        "A: Elements space occupy on a screen",
        "B: Universal selector ",
        "C: Font family possibilities",
        "D: How to place a picture",
    ],
    answer: "Elemets space occupy on a screen" 
},
{
    question:"How do you link your CSS sheet to HTML",
    options: [
        "A:<link rel="stylesheet" type="text/css" href="./css/style.css" />",
        "B:<link rel="stylesheet" type="text/css" href="./kittens/css/style.css" />",
        "C: <link rel="stylesheet" type="text/css" href="./assests/style.css" />",
        "D:<link rel="stylesheet" type="text/css" href="./assests/css/style.css" />",
    ],
    answer:"<link rel="stylesheet" type="text/css" href="./assests/css/style.css" />"
},
{
    question:"How do you get your application to adjust with size changes on different devices",
    options: [
        "A: for-loop",
        "B: media-screen",
        "C: border-box",
        "D: max-width",
    ],
    answer:"media-screen"
},
{
    question:"What is one way to style a box in CSS",
    options: [
        "A: Left-align",
        "B: Column",
        "C: Transform",
        "D: Font-weight",
    ],
    answer:"Transform"
},
];
// HELP IM UNWELL
var index = 0;
var noTime = 100;
var score = 0;
var flash;
var secondsLeft = 100;

function setTime(){
    var timeInterval = setInterval(() {
      secondsLeft;
      noTime--;
      timeEl.textContent = secondsLeft + "Count down."; 
      
      if(secondsLeft ===0){
        clearInterval(timerInterval);
        sendMessage ();
      }
    }, 1000),
      }
      
      
      (noTime <= 0) {
        clearInterval(timerInerval);
        endShit();
      }
    }, 1000);
  };
  var startGame = () => {
    quizContainer.classList.remove("hide");
    startYourQuiz();
    displayQuiz();
  };
  var displayShit = () => {
    questionLine.textContent = questionList[index].question;
  
    let answerQuestion = questionList[index].options;
    let theseAnswers = "";
    for (var i = 0; i < answerQuestion.length; i++) {
      theseAnswers += `
          <li>${answerQuestion[i]}</li>           
          `;
      answerDiv.innerHTML = theseAnswers;
    }
  };
  
  startButton.addEventListener("click", function() {
    count++;
  }
    if (event.target.matches("li")) {
      checkAnswer(event.target.textContent);
    }
  });
  var checkAnswer = (element) => {
    var correctAnswer = questionlist[index].answer;
  
    if (element === correctAnswer) {
      clearTimeout(flash)
      score++;
      flash = setTimeout(function(){
          flashNote.textContent = "Good job"
      },1000)
    } else {
      clearTimeout(flash)
      score--;
      Timer -= 10;
      flash = setTimeout(function (){
          flashNote.textContent = "Incorrect"
      })
    }
  
    index++;
  
    if (questionlist.length > index) {
      displayShit();
    } else {
      clearInterval(window.timerInerval);
      endQuestion();
    }
  };
  
  const endShit = () => {
    endScreen.classList.remove("hide");
  };
  
  const storeShit = (event) => {
    event.preventDefault();
    const initals = inputBox.value.trim();
    let scoreShit = JSON.parse(localStorage.getItem("scoreShit")) || [];
  
    let newShit = {
      initals: initals,
      score: score,
    };
  
    scoreShit.push(newShit);
  
    localStorage.setItem("scoreShit", JSON.stringify(scoreShit));
    highScoresSection.classList.remove("hide")
    coolcatpic.classList.remove("hide");
    inputBox.value = "";
  };
  
  const showShit = (event) => {
    event.preventDefault();
    scoreboard.classList.remove("hide");
    let showDemScores = JSON.parse(localStorage.getItem("scoreShit")) || [];
    let shitScores = "";
    for (var i = 0; i < showDemScores.length; i++) {
      shitScores += `
        
         <li>${showDemScores[i].initals} --- ${showDemScores[i].score}</li>
          
        `;
  
      scoreboard.innerHTML = shitScores;
    }
  };
  
  coolcatpic.addEventListener("mouseover", showShit);
  inputBtn.addEventListener("click", storeShit);
  startbtn.addEventListener("click", startGame);