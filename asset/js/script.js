var startBtn = document.querySelector('.start-btn')
var startBtnContainer = document.querySelector('.start-btn-container')
var questionsContainer = document.querySelector('.questions-container')

var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper trans metallic lens ", "Hope the meal lasts", "Heavy tele metric lines ", "HyperText Markup Language"],
        correct: "answer 4 of 1"
    },
    {
        question: "Which coding language adds styling to web pages?"
        choices: ["Javascript", "CSS", "HTML", "Python"],
        correct: "answer 2 of 2"
    },
    {
        question: "Who invented the Linus operating system?",
        choices : ["Bill Gates", "Linus Torvald", "Steve Jobs", "Steve Ballmer"],
        correct: "answer 2 of 3"
    },
    {
        question: "Which company uses the iOS operating system?",
        choices : ["Motorola", "Android", "Apple", "Nokia"],
        correct: "answer 3 of 4"
    },
    {
        question: "How many sides does an octogon have?",
        choices : [ 6, 3, 7, 8],
        correct: "answer 4 of 5"
    },
{
    question: "What did the Open Handset Alliance consortium create",
    choices : ["Android", "Hacking", "Uber", "Javascript"],
    correct: "answer 1 of 6"
},
{
    question: "Who owns Twitter?",
    choices : ["Warren Buffet", "Al Gore", "Elon Musk", "Tweety Bird"],
    correct: "answer 3 of 7"

},
{
    question: "The md in README.md stands for?",
    choices : ["most definitely", "mucho dinero", "markdown", "mad dogs"],
    correct: "answer 3 of 8"
},
{
    question: "Which company created VS Code?",
    choices : ["Google", "Apple", "Microsoft", "Disney"],
    correct: "answer 3 of 9"
},
{
    question: "BMW was founded in which country?",
    choices : ["Germany", "United States", "Australia", "Ireland"],
    correct: "answer 1 of 10"
}

function startQuiz() {
    startBtnContainer.classList.add("hide")
    displayQuestions()
}

function displayQuestions() {
    var quizQuestion = document.createElement("h1")

    quizQuestion.textContent = questions[0].question

    questionsContainer.append(quizQuestion)
}

startBtn.addEventListener("click", startQuiz)