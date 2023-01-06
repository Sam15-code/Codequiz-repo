var mainEl = document.getElementById("main")
var resultsEl = document.getElementById("results")
var quiz = document.getElementById("start-quiz")
var question = document.getElementById("question-div")
var choices1 = document.getElementById("choices1")
var choices2 = document.getElementById("choices2")
var choices3 = document.getElementById("choices3")
var choices4 = document.getElementById("choices4")
var time = document.getElementById("timer")
var score = document.getElementById("scores-div")
var qresults = document.getElementById("question-results")





var questionNumber = 0
var scoreCount = 0
var timerCount = 70
var timerEl;

mainEl.style.display = "none"
resultsEl.style.display = "none"








quiz.addEventListener("click" ,function(){
    mainEl.style.display = "block"
    quiz.style.display = "none"
    timerEl = setInterval(function(){
        time.textContent = timerCount;
        if(timerCount > 0){
            timerCount--
        }else{
            endEquiz()
        }
    },1000)  
    getQuestion()

})



function getQuestion(){
    question.textContent = questionList[questionNumber].question
    choices1.textContent = questionList[questionNumber].choices1
    choices2.textContent = questionList[questionNumber].choices2
    choices3.textContent = questionList[questionNumber].choices3
    choices4.textContent = questionList[questionNumber].choices4
}

function checkAnswer(){
    var userEntry = this.getAttribute("id")
    console.log(userEntry)
    if(userEntry == questionList[questionNumber].answer){
        scoreCount += 10
        score.textContent = scoreCount
        qresults.textContent = (questionNumber +1) + "is Correct !"
    }else{
        timerCount -=10
        score.textContent = scoreCount
        qresults.textContent = (questionNumber +1) + "is Incorrect !"
    }
    if(questionNumber< questionList.length-1){
        questionNumber++;
        getQuestion()
    }else{
        endEquiz()
    }
}


function endEquiz(){
    mainEl.style.display = "none"
    resultsEl.style.display = "block"
    clearInterval(timerEl)
    document.getElementById("fscore").innerText =  (scoreCount) + (timerCount)
}


choices1.addEventListener('click',checkAnswer)
choices2.addEventListener('click',checkAnswer)
choices3.addEventListener('click',checkAnswer)
choices4.addEventListener('click',checkAnswer)