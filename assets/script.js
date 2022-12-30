var mainEl = document.getElementById("main")
var resultsEl = document.getElementById("results")
var quiz = document.getElementById("start-quiz")
var question = document.getElementById("question-div")
var choices1 = document.getElementById("choices1")
var choices2 = document.getElementById("choices2")
var choices3 = document.getElementById("choices3")
var choices4 = document.getElementById("choices4")

var questionNumber = 0
var scoreCount = 0
mainEl.style.display = "none"
resultsEl.style.display = "none"








quiz.addEventListener("click" ,function(){
    mainEl.style.display = "block"
    quiz.style.display = "none"  
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
    if(userEntry == questionList[questionNumber].answer){
        scoreCount += 10
    }else{

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
    
}


choices1.addEventListener('click',checkAnswer)
choices2.addEventListener('click',checkAnswer)
choices3.addEventListener('click',checkAnswer)
choices4.addEventListener('click',checkAnswer)