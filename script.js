const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "Which is the largest planet in our solar system?",
        answers: ["Mars", "Jupiter", "Earth", "Venus"],
        correct: "Jupiter"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(answer, currentQuestion.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    answerButtons.innerHTML = "";
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    scoreElement.innerText = `Score: ${score}`;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.innerText = "Quiz Completed!";
        answerButtons.innerHTML = "";
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", loadQuestion);

loadQuestion();
