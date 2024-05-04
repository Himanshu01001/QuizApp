const questions = [{
    question : "What is my favourite color",
    answers : [
        {text:"Blue", correct:true},
        {text:"Red", correct:false},
        {text:"Brown",correct:false},
        {text:"Black",correct:false},
    ]
},
    {question : "What is my favourite Destinaton",
    answers : [
        {text:"Goa", correct:false},
        {text:"Darjelling", correct:false},
        {text:"Manali",correct:false},
        {text:"Ladakh",correct:true},
    ]
},
    {question : "What is my Full name",
    answers : [
        {text:"Himanshu Sharma", correct:false},
        {text:"Himanshu Saini", correct:false},
        {text:"Sanjay Singh",correct:false},
        {text:"Himanshu Singh",correct:true},
    ]
},
    {question : "Where do i live on jaipur",
    answers : [
        {text:"Jagatpura", correct:false},
        {text:"Pratap Nagar", correct:true},
        {text:"Mansarovar",correct:false},
        {text:"Malviya nagar",correct:false},
    ]
},]

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer(e){
    const selectButton =  e.target;
    const isCorrect = selectButton.dataset.correct === "true";
    if (isCorrect){
        selectButton.classList.add("correct");
        score++;
    }
    else{
        selectButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} Out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length ){
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();


///////////////////////////  Learnigs from this code is as follows:///////////////////////////////////



// 1. First i put array into array for this i made a Question array and inside this question array i put my answer array.

// 2. Secondaly i declare the id and classes of html element into the const variable.

// 3. third Step is to declare the score and current value index of array as null to reset the score to zero and then declare a function startQuiz in which the ideal condition is written for starting a quiz.

// 4. Fourth i declare a function showQuestion() for question in this i declare current Question And Question no. and then i declare a loop for answer in which i create a element of button for all the answers and then i put the answers inside the button.

//  5. Fifth i check wheather the given answers are correct if they are correct i put them inside the dataset and add a event listner "click" with a function selectAnswer.

// 6. In this step we declare function resetState in which we declare this for next Question so that the previous question is eliminated and the next question brings the same functionality as the first question.

//7. Now we declare the function selectAnswer in which we first declare a variable in which we target second we create another variable in that we check wheather the data set is true or false if it is true we wiil update the score and create a class list correct else we create incorrect.

//8. In this step we create an array in which we first select children of answer button and then create a loop in which if answer is corect it is added to created classlist correct and then the button will be disabled else the answer  will be wrong correct answer will be shown at last next button will be shown as it display block now.

//9. Now we declare a funtion a handleNextButton in which we write if the index of current question is less than question length then it will display next question else it will display show score.

//10. In this step we declare a function showScore in which at first we first call function resetState()and then in the paragraph declare our total score out of score and display nextbutton as palyagain and add diaplay block.

//11. lastly in the next button add a event listner in which if the currentquestion index is less then question length  then we call the function handleNextButton() else we call the function startQuiz() which will reset and start  quiz again.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////