let startArea = document.getElementsByClassName("start-section-wrapper");
let statArea = document.getElementsByClassName("stat-section-wrapper");
let qnaArea = document.getElementsByClassName("qna-section__wrapper");
let resArea = document.getElementsByClassName("result-section__wrapper");
let startBtn = document.getElementById("startBtn");
let nextBtn = document.getElementById("nextQBtn");
let closeBtn = document.getElementById("closeBtn");
let imResult = document.getElementById("imResult");
const QUESTIONS = [
  {
    id: 0,
    question: "Which cricket team has won most ICC Cricket World Cup titles?",
    answers: ["West Indies", "India", "England", "Australia"],
    correctAns: 3,
  },
  {
    id: 1,
    question: "What is the largest cricket stadium in the world?",
    answers: [
      "Eden Gardens",
      "Melbourne Cricket Club",
      "Lords",
      "Narendra Modi Stadium",
    ],
    correctAns: 3,
  },
  {
    id: 2,
    question: "Which country won the first FIFA World Cup?",
    answers: ["Argentina", "Uruguay", "Italy", "Brazil"],
    correctAns: 1,
  },
  {
    id: 3,
    question: "Which Grand Slam Tournament is held in January?",
    answers: [
      "The French Open",
      "The US Open",
      "The Australian Open",
      "Wimbledon",
    ],
    correctAns: 2,
  },
  {
    id: 4,
    question: "What is the score required to win a game in badminton?",
    answers: ["15", "21", "25", "27"],
    correctAns: 1,
  },
  {
    id: 5,
    question:
      "Who holds the record for most matches played at the FIFA World Cup? ",
    answers: [
      "Paolo Maldini",
      "Lothar Matthaus",
      "Miroslav Klose",
      "Lionel Messi",
    ],
    correctAns: 3,
  },
  {
    id: 6,
    question: "When was women's tennis first included in the Olympics?",
    answers: ["1900", "1980", "1992", "1912"],
    correctAns: 0,
  },
  {
    id: 7,
    question: "What is the maximum number of games in a badminton match?",
    answers: ["5", "7", "3", "2"],
    correctAns: 2,
  },
  {
    id: 8,
    question: "Who is the leading run scorer in Test Cricket?",
    answers: [
      "Sachin Tendulkar",
      "Jacques Kallis",
      "Ricky Ponting",
      "Kumar Sangakkara",
    ],
    correctAns: 0,
  },
  {
    id: 9,
    question: "How many times has Brazil won the FIFA World Cup?",
    answers: ["4", "5", "6", "7"],
    correctAns: 1,
  },
];

window.onload = function () {
  startArea[0].style.display = "";
  statArea[0].style.display = "none";
  qnaArea[0].style.display = "none";
  resArea[0].style.display = "none";
};

startBtn.onclick = () => {
  startArea[0].style.display = "none";
  statArea[0].style.display = "";
  qnaArea[0].style.display = "";
  resArea[0].style.display = "none";
  startQuiz();
  runTimer().then(() => {});
};

nextBtn.onclick = () => {
  let num = parseInt(currentQuestionNumber.innerText);

  if (num === QUESTIONS.length - 1) nextBtn.innerText = "Submit";

  if (num === QUESTIONS.length) {
    closeQuiz();
  } else {
    currentQuestionNumber.innerText = (num + 1).toString();
    currentQuestion.innerText = QUESTIONS[num].question;
    answer1.innerText = QUESTIONS[num].answers[0];
    answer2.innerText = QUESTIONS[num].answers[1];
    answer3.innerText = QUESTIONS[num].answers[2];
    answer4.innerText = QUESTIONS[num].answers[3];
    imResult.innerText = "";
  }
  enableBtnSet();
};

closeBtn.onclick = () => {
  startArea[0].style.display = "";
  statArea[0].style.display = "none";
  qnaArea[0].style.display = "none";
  resArea[0].style.display = "none";
  location.reload();
};

let currentQuestionNumber = document.getElementById("currentQuestionNum");
let totalQuestions = document.getElementById("totalQuestions");
let timeLeft = document.getElementById("timeLeft");
let currentQuestion = document.getElementById("currentQuestion");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let timeElapsed = document.getElementById("timeElapsed");
let questionCount = document.getElementById("questionCount");
let correctNum = document.getElementById("correctNum");
let wrongNum = document.getElementById("wrongNum");
let feedback = document.getElementById("feedback");
let correctAnswers = 0;
let wrongAnswers = 0;
let timeTaken = 0;

let startQuiz = () => {
  currentQuestionNumber.innerText = (1).toString();
  nextBtn.innerText = "Next Question";
  totalQuestions.innerText = QUESTIONS.length.toString();
  timeLeft.innerText = "60";
  currentQuestion.innerText = QUESTIONS[0].question;
  answer1.innerText = QUESTIONS[0].answers[0];
  answer2.innerText = QUESTIONS[0].answers[1];
  answer3.innerText = QUESTIONS[0].answers[2];
  answer4.innerText = QUESTIONS[0].answers[3];
  imResult.innerText = "";
};

let runTimer = async () => {
  for (let i = 180; i > 0; i--) {
    timeLeft.innerText = i.toString();
    await delay(1000);
  }
  closeQuiz();
};

let delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

let closeQuiz = () => {
  timeTaken = 180 - parseInt(timeLeft.innerText);
  timeElapsed.innerText = timeTaken;
  questionCount.innerText = QUESTIONS.length.toString();
  correctNum.innerText = correctAnswers;
  wrongNum.innerText = (QUESTIONS.length - correctAnswers).toString();
  startArea[0].style.display = "none";
  statArea[0].style.display = "none";
  qnaArea[0].style.display = "none";
  resArea[0].style.display = "";

  if (correctAnswers < 5) {
    feedback.innerText = "Poor Results. Follow more sports content regularly";
    feedback.style.color = "red";
  } else {
    feedback.innerText = "Excellent Mark. Keep up the good work";
    feedback.style.color = "green";
  }
};

answer1.onclick = () => {
  let questionNum = parseInt(
    document.getElementById("currentQuestionNum").innerText
  );
  checkAnswer(0, questionNum);
};

answer2.onclick = () => {
  let questionNum = parseInt(
    document.getElementById("currentQuestionNum").innerText
  );
  checkAnswer(1, questionNum);
};

answer3.onclick = () => {
  let questionNum = parseInt(
    document.getElementById("currentQuestionNum").innerText
  );
  checkAnswer(2, questionNum);
};

answer4.onclick = () => {
  let questionNum = parseInt(
    document.getElementById("currentQuestionNum").innerText
  );
  checkAnswer(3, questionNum);
};

let checkAnswer = (btnIndex, questionNum) => {
  let correctAns = QUESTIONS[questionNum - 1].correctAns;
  let CorrectAnswerNum = "answer" + (correctAns + 1);
  let WrongAnswerNum = "answer" + (btnIndex + 1);
  if (correctAns === btnIndex) {
    imResult.innerText = "Correct Answer";
    imResult.style.color = "green";
    correctAnswers += 1;
    eval(CorrectAnswerNum).style.backgroundColor = "green";
  } else {
    imResult.innerText = "Incorrect Answer";
    imResult.style.color = "red";
    wrongAnswers += 1;
    eval(WrongAnswerNum).style.backgroundColor = "red";
    eval(CorrectAnswerNum).style.backgroundColor = "green";
  }
  disableBtnSet();
};

let disableBtnSet = () => {
  answer1.disabled = true;
  answer2.disabled = true;
  answer3.disabled = true;
  answer4.disabled = true;
};

let enableBtnSet = () => {
  answer1.disabled = false;
  answer2.disabled = false;
  answer3.disabled = false;
  answer4.disabled = false;
  answer1.style.backgroundColor = "gray";
  answer2.style.backgroundColor = "gray";
  answer3.style.backgroundColor = "gray";
  answer4.style.backgroundColor = "gray";
};
