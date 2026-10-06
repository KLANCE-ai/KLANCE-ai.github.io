const questions = [
    {
        question: "The reason Birmingham was the first city that King attempted to get rid of Jim Crow's law was because it was the most…",
        answers: [
            {text: "Open", correct: false},
            {text: "Diverse", correct: false},
            {text: "Racist", correct: true},
            {text: "Safe", correct: false},
        ]
    },
    {
        question: "When did Martin Luther King Jr die?",
        answers: [
            {text: "2nd of April, 1968", correct: false},
            {text: "4th of April, 1964", correct: false},
            {text: "1st of April, 1965", correct: false},
            {text: "4th of April, 1968", correct: true},
        ]
    },
    {
        question: "Ku Klux Klan (KKK) was known for…",
        answers: [
            {text: "Being in the Birmingham Campaign", correct: false},
            {text: "Wearing white cloaks to intimidate", correct: true},
            {text: "Lynching coloured people", correct: true},
            {text: "Being racist and discriminating to several religions", correct: true},
        ]
    },
    {
        question: "What movie caused the KKK to gain popularity?",
        answers: [
            {text: "Rise of the Nation", correct: false},
            {text: "How the Nation Rises", correct: false},
            {text: "Birth of a Nation", correct: true},
            {text: "The Nations birth", correct: false},
        ]
    },
    {
        question: "What date did the Brown V Board of Education occur?",
        answers: [
            {text: "18th of May, 1955", correct: false},
            {text: "17th of May, 1954", correct: true},
            {text: "27th of May 1954", correct: false},
            {text: "16th of May 1955", correct: false},
        ]
    },
    {
        question: "The Children's Crusade in the Birmingham Campaign was controversial because…",
        answers: [
            {text: "African American adults did not think it was right to involve children", correct: true},
            {text: "The Children could be suspended/expelled from schools", correct: true},
            {text: "African Americans didn’t know what was going to happen", correct: false},
            {text: "The children could get jailtime", correct: true},
        ]
    },
    {
        question: "How does Eugene ‘Bull’ Connor fit into the Birmingham Campaign?",
        answers: [
            {text: "He was public safety commissioner of Birmingham", correct: true},
            {text: "He physically attacked protestors", correct: false},
            {text: "He ordered police and firefighters to attack", correct: true},
            {text: "He verbally attacked protestors", correct: true},
        ]
    },
    {
        question: "What did the Freedom Riders do?",
        answers: [
            {text: "Ride into protests", correct: false},
            {text: "Rode interstate buses", correct: true},
            {text: "Took people to the North", correct: false},
            {text: "They were a separate protest group", correct: false},
        ]
    },
    {
        question: "Martin Luther King Jr went to India to…",
        answers: [
            {text: "Learn how to protest", correct: false},
            {text: "Further his Sociology degree", correct: false},
            {text: "Learn Gandhi's way of protest", correct: true},
            {text: "Gain allies for his protest", correct: false},
        ]
    },
    {
        question: "What group did Martin Luther King Jr first lead?",
        answers: [
            {text: "Southern Christian Leadership Conference", correct: false},
            {text: "Montgomery Improvement Association", correct: true},
            {text: "Modern American Civil Rights Movement", correct: false},
            {text: "Nation Association Advancement of Coloured People", correct: false},
        ]
    }
];

const questionElement = document.querySelector(".questionName");
const answerButtons = document.querySelector(".questionButton");
const nextButton = document.querySelector(".nextButton1");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.innerHTML = answer.text;
        button.classList.add("btn");

        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();

    questionElement.innerHTML =
        `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();