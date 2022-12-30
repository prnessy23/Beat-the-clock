var startBtn = document.querySelector(".start-btn");
// Created initial Start button to begin quiz
var startBtnContainer = document.querySelector(".start-btn-container");
var questionsContainer = document.querySelector(".questions-container");
var timerContainer = document.getElementById("times");
var timeLeftEl = document.getElementById("timeLeft");

var questionIndex = 0;

var score = 0;
var time = 200;
// Created multiple choice questions
var questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper trans metallic lens",
      "Hyper trail meta lens",
      "Heavy tele metric lines ",
      "HyperText Markup Language",
    ],
    correct: "HyperText Markup Language",
  },
  {
    question: "Which coding language adds styling to web pages?",
    choices: ["Javascript", "CSS", "HTML", "Python"],
    correct: "CSS",
  },
  {
    question: "Who invented the Linus operating system?",
    choices: ["Bill Gates", "Linus Torvald", "Steve Jobs", "Steve Ballmer"],
    correct: "Linus Torvald",
  },
  {
    question: "Which company uses the iOS operating system?",
    choices: ["Motorola", "Android", "Apple", "Nokia"],
    correct: "Apple",
  },
  {
    question: "How many sides does an octogon have?",
    choices: [6, 3, 7, 8],
    correct: 8,
  },
  {
    question: "What did the Open Handset Alliance consortium help create",
    choices: ["Android", "Hacking", "Uber", "Javascript"],
    correct: "Android",
  },
  {
    question: "Who owns Twitter?",
    choices: ["Warren Buffet", "Al Gore", "Elon Musk", "Tweety Bird"],
    correct: "Elon Musk",
  },
  {
    question: "What does the md in README.md stands for?",
    choices: ["most definitely", "mucho dinero", "markdown", "mad dogs"],
    correct: "markdown",
  },
  {
    question: "Which company created VS Code?",
    choices: ["Google", "Apple", "Microsoft", "Disney"],
    correct: "Microsoft",
  },
  {
    question: "BMW was founded in which country?",
    choices: ["Germany", "United States", "Australia", "Ireland"],
    correct: "Germany",
  },
];

function startQuiz() {
  startBtnContainer.classList.add("hide");
  startTimer();
  displayQuestions();
}

function startTimer() {
  timerContainer.classList.remove("hide");
  timeLeftEl.textContent = time;

  var timerInterval = setInterval(function () {
    time--;
    timeLeftEl.textContent = time;

    if (time === 0 || questionIndex > questions.length - 1) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  var nameInput = document.createElement("input");
  nameInput.setAttribute("placeholder", "What is your name?");
  var submit = document.createElement("button");
  submit.textContent = "SUBMIT";
  questionsContainer.append(nameInput, submit);

  submit.addEventListener("click", function() {
    var user = {
        name: nameInput.value,
        score: score
    }

    var storage = JSON.parse(localStorage.getItem("quizHistory"))
    if(storage === null) {
        storage = []
    }

    storage.push(user)
    localStorage.setItem("quizHistory", JSON.stringify(storage))
    window.location.href = "highscores.html"
  })
  
}

function displayQuestions() {
  questionsContainer.textContent = "";
  if (questionIndex > questions.length - 1) {
    return;
  }
  var quizQuestion = document.createElement("h1");
  var choicesUl = document.createElement("div");

  quizQuestion.textContent = questions[questionIndex].question;

  for (var i = 0; i < questions[questionIndex].choices.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = questions[questionIndex].choices[i];
    choicesUl.append(btn);

    btn.addEventListener("click", function (event) {
      if (event.target.textContent === questions[0].correct) {
        console.log("correct");
        score += 10;
      } else {
        console.log("incorrect");
        time -= 10;
      }
      questionIndex++;
      displayQuestions();
    });
  }

  questionsContainer.append(quizQuestion);
  questionsContainer.append(choicesUl);
}

startBtn.addEventListener("click", startQuiz);
