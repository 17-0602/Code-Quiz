document.getElementById("questionOfQuiz1"). style.display = "none";
document.getElementById("questionOfQuiz2"). style.display = "none";
document.getElementById("questionOfQuiz3"). style.display = "none";
document.getElementById("questionOfQuiz4"). style.display = "none";
document.getElementById("quizResults"). style.display = "none";
document.getElementById("registerID"). style.display = "none";
//HW variables 
var codingQuestions = document.getElementById("codingQuestions");
var answer1 = document.getElementById("rightAnswer1");
var answer2 = document.getElementById("rightAnswer2");
var answer3 = document.getElementById("rightAnswer3");
var answer4 = document.getElementById("rightAnswer4")

//Questions:
var quizQuestions = [
  {
    questionOfQuiz: "Commonly used data DO NOT include:",
    answerOptions: ["strings", "booleans", "alerts", "numbers"],
    rightAnswer: 0
  },
  {
    questionOfQuiz: "The condition IF/ELSE statement is enclosed within",
    answerOptions: ["quotes", "curly brackets", "parentheses", "square brackets"],
    rightAnswer:  1
  },
  {
    questionOfQuiz: "Arrays in JS can be used for",
    answerOptions: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    rightAnswer: 2
  },
  {
    questionOfQuiz: "String values must be enclosed within...when being assigned to variables.",
    answerOptions: ["commas", "curly brackets", "quotes", "parentheses"],
    rightAnswer: 2
  },
]