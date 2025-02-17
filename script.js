const questions = [
    { question: "sin²θ + cos²θ = ?", answers: ["0", "1", "sinθ", "cosθ"], correct: "1" },
    { question: "1 + tan²θ = ?", answers: ["sin²θ", "sec²θ", "cos²θ", "cosec²θ"], correct: "sec²θ" },
    { question: "1 + cot²θ = ?", answers: ["tan²θ", "sin²θ", "cosec²θ", "sec²θ"], correct: "cosec²θ" },
    { question: "sin(2θ) = ?", answers: ["2sinθcosθ", "sin²θ - cos²θ", "tanθ", "cos²θ - sin²θ"], correct: "2sinθcosθ" },
    { question: "cos(2θ) = ?", answers: ["cos²θ - sin²θ", "2sinθcosθ", "tanθ", "sec²θ"], correct: "cos²θ - sin²θ" },
    { question: "tan(2θ) = ?", answers: ["2tanθ / (1 - tan²θ)", "tanθ", "sinθ/cosθ", "sec²θ"], correct: "2tanθ / (1 - tan²θ)" },
    { question: "sin(A + B) = ?", answers: ["sinA + sinB", "sinAcosB + cosAsinB", "tanA + tanB", "cosA + cosB"], correct: "sinAcosB + cosAsinB" },
    { question: "cos(A + B) = ?", answers: ["cosAcosB - sinAsinB", "cosA + cosB", "tanA + tanB", "sinAcosB + cosAsinB"], correct: "cosAcosB - sinAsinB" },
    { question: "tan(A + B) = ?", answers: ["(tanA + tanB) / (1 - tanA tanB)", "tanA - tanB", "sinA + sinB", "cosA - cosB"], correct: "(tanA + tanB) / (1 - tanA tanB)" },
    { question: "cot(A + B) = ?", answers: ["(cotA cotB - 1) / (cotB + cotA)", "cotA + cotB", "sinA + sinB", "cosA + cosB"], correct: "(cotA cotB - 1) / (cotB + cotA)" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const resultElement = document.getElementById("result");

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
    resultElement.innerText = "";
    nextButton.style.display = "none";
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        resultElement.innerText = "Correct! ✅";
    } else {
        resultElement.innerText = `Wrong ❌ The correct answer is: ${correct}`;
    }
    scoreElement.innerText = `Score: ${score}`;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        nextButton.style.display = "block";
    } else {
        questionElement.innerText = "Quiz Completed!";
        answerButtons.innerHTML = "";
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", loadQuestion);

loadQuestion();
