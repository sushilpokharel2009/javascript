var questions = [{
        qu: "What is 10 + 2?",
        chA: "12",
        chB: "13",
        chC: "14",
        correct: "A"
    },

    {
        qu: "What is 4 + 2?",
        chA: "1",
        chB: "4",
        chC: "6",
        correct: "C"
    },

    {
        qu: "What is 10 + 27?",
        chA: "12",
        chB: "33",
        chC: "37",
        correct: "C"
    },

    {
        qu: "What is 1 + 2?",
        chA: "3",
        chB: "4",
        chC: "5",
        correct: "A"
    },

    {
        qu: "What is 2 + 7?",
        chA: "7",
        chB: "9",
        chC: "11",
        correct: "B"
    },

    {
        qu: "What is 4 + 4?",
        chA: "6",
        chB: "8",
        chC: "10",
        correct: "B"
    }

];






let startQuiz = document.getElementById('start-btn');
let ques = document.getElementById('question');
let ans = document.getElementById('answer');
let fAns = document.getElementById('first');
let sAns = document.getElementById('second');
let tAns = document.getElementById('third');
let pButton = document.getElementById('prev-btn');
let nButton = document.getElementById('next-btn');
let timerBtn = document.getElementById('timer');
let sc = document.getElementById('score');
let sButton = document.getElementById('btn');


startQuiz.addEventListener("click", displayQuestion);



let q = questions.length - 1;
let score = 0;
let currentQuestionIndex = 0;

function displayQuestion() {
    //console.log(q[currentQuestionIndex]);
    for (var i = 0; i < q; i++) {
        ques.innerHTML = "<p>${q.que}</p>";
        fAns.innerHTML = q.fAns;
        sAns.innerHTML = q.sAns;
        tAns.innerHTML = q.tAns;


    }

}



var count = 30;
var interval = setInterval(function () {
    document.getElementById('timer').innerHTML = "Your time started: " + count;
    count--;
    if (count === 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = 'Time is over!!';
        //alert("You're out of time!");
    }
}, 100);

function quizStart() {
    displayQuestion();
    selectAnswer();
}

function nextQuestion() {

}

function selectAnswer(answer) {
    if (answer === q.correct) {
        score++;
        q.que.style.color = "green";
    } else {
        answerIsWrong();
    }
}

function answerIsWrong() {
    q.que.style.color = "red";
}

nButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function setNextQuestion() {
    console.log("Next question!")
}