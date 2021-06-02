// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
// const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
// create our questions
let questions = [
    {
        question : "1. Permen apa yang paling besar? ",
        // imgSrc : "img/html.png",
        choiceA : "Lanjut",
        // choiceB : "Salah",
        // choiceC : "Salah",
        correct : "A"
    },{
        question : "2. Kesenian, kesenian apa yang suka dilakukan nasabah bank?",
        // imgSrc : "img/css.png",
        choiceA : "Lanjut",
        // choiceB : "Benar",
        // choiceC : "Salah",
        correct : "A"
    },{
        question : "3. Jajan apa yang diserudug banteng?",
        // imgSrc : "img/js.png",
        choiceA : "Lanjut",
        // choiceB : "Salah",
        // choiceC : "Benar",
        correct : "A"
    },{
        question : "4. Air apa yang bisa terbang?",
        // imgSrc : "img/js.png",
        choiceA : "Lanjut",
        // choiceB : "Salah",
        // choiceC : "Benar",
        correct : "A"
    },{
        question : "5. Mobil apa yang malu diucapin?",
        // imgSrc : "img/js.png",
        choiceA : "Selesai",
        // choiceB : "Salah",
        // choiceC : "Benar",
        correct : "A"
    }
];
// create some variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
// const questionTime = 10; // 10s
// const gaugeWidth = 150; // 150px
// const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
// let score = 0;
// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    // qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    // choiceB.innerHTML = q.choiceB;
    // choiceC.innerHTML = q.choiceC;
}
start.addEventListener("click",startQuiz);
// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    // renderCounter();
    // TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}
// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
// counter render
// function renderCounter(){
//     if(count <= questionTime){
//         // counter.innerHTML = count;
//         // timeGauge.style.width = count * gaugeUnit + "px";
//         // count++
//     }else{
//         count = 0;
//         // change progress color to red
//         answerIsWrong();
//         if(runningQuestion < lastQuestion){
//             runningQuestion++;
//             renderQuestion();
//         }else{
//             // end the quiz and show the score
//         //     clearInterval(TIMER);
//         //     scoreRender();
//         }
//     }
// }
// checkAnwer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        // score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    // count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}
// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}
// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}
// score render
function scoreRender(){
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    // const scorePerCent = Math.round(100 * score/questions.length);
    
    // // choose the image based on the scorePerCent
    // let img = (scorePerCent >= 80) ? "img/5.png" :
    //           (scorePerCent >= 60) ? "img/4.png" :
    //           (scorePerCent >= 40) ? "img/3.png" :
    //           (scorePerCent >= 20) ? "img/2.png" :
    //           "img/1.png";
    
    scoreDiv.innerHTML = "<p>"+ img +"<p>";
    para.appendChild(node);
}