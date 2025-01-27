import { pretest_answerKey, pretest_choices, pretest_questions } from '../data.js'
import { transi } from './main.js';  

const que_idx = 1;

// Variables
// let questiondispalay = false;
let questionIndex = 0;
let currentAnswer = "";

const userAnswers = Array(pretest_questions.length).fill("");
const choice = {
    a: document.getElementById('a'),
    b: document.getElementById('b'),
    c: document.getElementById('c'),
    d: document.getElementById('d')
}
Object.entries(choice).forEach(([key, choices]) => {
    choices.addEventListener("click", () => {
        resetAnswerState();
        currentAnswer = key;
        userAnswers[questionIndex] = key;
        choices.style.backgroundColor = "blue";
        validateAllAnswers();
    });
});
function resetAnswerState() {
    Object.values(choice).forEach((choice) => {
        choice.style.backgroundColor = "white";
    });
}
function setFirstQuestion() {
    document.getElementById("q1").textContent = pretest_questions[1];
    Object.values(choice).forEach((choice) => {
        choice.textContent = "white";
    });

}
function validateAllAnswers() {
    const allAnswered = userAnswers.every((answer) => answer !== "");
    document.getElementById('ok').disabled = !allAnswered;
}
setFirstQuestion();
function test() {
    document.getElementById('ok').disabled = false;
    document.getElementById('ok').addEventListener('click', () => {
        document.getElementById("notice2").style.display = "flex";
        document.getElementById("startbutton").disabled = false;
        document.getElementById("login_form").style.display = "none";

        setTimeout(() => {
            document.getElementById("pretest").style.display = "none";
            document.getElementById("map").style.display = "flex";
            // document.getElementById("notice").style.display = "flex";
        }, 4000); // Notice appears after 4 seconds

        // Second timeout to hide the notice after 6 seconds
        // setTimeout(() => {
        //     console.log("Notice disappearing");
        //     document.getElementById("notice2").style.display = "none";
        // }, 3000);

        transi();
    })
}
test();