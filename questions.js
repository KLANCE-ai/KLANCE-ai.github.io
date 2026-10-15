// setting questions
const questions = [
    {
        question: "The reason Birmingham was the first city that King attempted to get rid of Jim Crow's law was because it was the most…",
        answers: [
            { text: "Open", correct: false},
            { text: "Racist", correct: true},
            { text: "Diverse", correct: false},
            { text: "Safe", correct: false},
        ]
    },
    {
        question: "When did Martin Luther King Jr die?",
        answers: [
            { text: "4th of April, 1968", correct: true},
            { text: "2nd of April, 1968", correct: false},
            { text: "1st of April, 1965", correct: false},
            { text: "4th of April, 1964", correct: false},
        ]
    },
    {
        question: "Ku Klux Klan (KKK) was known for…" ,
        answers: [
            { text: "Being in the Birmingham Campaign", correct: false},
            { text: "Wearing white cloaks and lynching coloured people", correct: true},
            { text: "Supporting the Black Civil Rights Movement", correct: false},
            { text: "Teaming up with Eugene 'Bull' Connor", correct: false},
        ]
    },
    {
        question: "What movie caused the KKK to gain popularity?",
        answers: [
            { text: "Rise of the Nation", correct: false},
            { text: "The Nations birth", correct: false},
            { text: "How the Nation Rises", correct: false},
            { text: "Birth of a Nation", correct: true},
        ]
    },
    {
        question: "What date was the Brown V Board of Education?",
        answers: [
            { text: "18th of May, 1955", correct: false},
            { text: "27th of May 1954", correct: false},
            { text: "16th of May 1955", correct: false},
            { text: "17th of May, 1954", correct: true},
        ]  
    }, 
    {
        question: "The Children's Crusade in the Birmingham Campaign was controversial because…" ,
        answers: [
            { text: "African Americans did not think it was right to involve children", correct: true},
            { text: "Parents were unaware of their children invloved", correct: false},
            { text: "The children were forced to be invloved", correct: false},
            { text: "Martin Luther King Jr didn't agree the entire time", correct: false},
        ]   
    },
    {
       question: "How does Eugene ‘Bull’ Connor fit into the Birmingham Campaign?" ,
        answers: [
            { text: "He was public safety commissioner of Birmingham and valued safety for EVERYONE", correct: false},
            { text: "He donated a large sum for the Birmingham Campaign to begin", correct: false},
            { text: "He ordered police and firefighters to attack during the Children Crusade", correct: true},
            { text: "He helped teach non-violence education with James Bevel", correct: false},
        ]    
    },
    {
       question: "What did Freedom Riders do?" ,
        answers: [
            { text: "Ride into protests", correct: false},
            { text: "Rode interstate buses", correct: true},
            { text: "Took people to the North", correct: false},
            { text: "They were a separate protest group", correct: false},
        ]  
    },
    {
       question: "Martin Luther King Jr went to India in 1959 to…" ,
        answers: [
            { text: "Learn Gandhi's way of protest", correct: true},
            { text: "Spread awareness about the Movement", correct: false},
            { text: "Gain allies for his protest", correct: false},
            { text: "Further his Sociology degree", correct: false},
        ]  
    },
    {
        question: "What group did Martin Luther King Jr first lead?" ,
        answers: [
            { text: "Modern American Civil Rights Movement", correct: false},
            { text: "Southern Christian Leadership Conference", correct: false},
            { text: "Nation Association Advancement of Coloured People", correct: false},
            { text: "Montgomery Improvement Association", correct: true},
        ]  
    }
];

// connecting questions values to variables
const questionElement=document.getElementById("questionName");
const answerButtons=document.getElementById("answerButtons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0; // when quiz restarts, question index and score is reset to 0
    score = 0;
    nextButton.innerHTML = "Next"; // will be changed to restart at the end
    showQuestion();
}


function showQuestion(){
    resetState(); // resets previous options eg '1'
    let currentQuestion = questions[currentQuestionIndex]; // for numbering the questions
    let questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); // creates button tag and saves it as a variable
        button.innerHTML = answer.text; // adding answer text to options
        button.classList.add("btn");
        answerButtons.appendChild(button); // button from before is added to div
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButton.firstChild);
    }
}

startQuiz();
