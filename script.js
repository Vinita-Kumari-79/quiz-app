// Quiz App created by Vinita Kumari for Internship Submission

const quiz = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correct: "Delhi"
  },
  {
    question: "Which language is used for web pages?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correct: "JavaScript"
  },
  {
    question: "What is the full form of HTML?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "None"],
    correct: "Hyper Text Markup Language"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(opt);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quiz[current].correct;
  if (selected === correct) {
    score++;
    alert("Correct Answer!");
  } else {
    alert("Wrong Answer. Correct is: " + correct);
  }
}

function loadNext() {
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-box").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your score: ${score} out of ${quiz.length}</p>
  `;
}

window.onload = loadQuestion;
