const submitBtn = document.getElementById("submitQuiz");
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["New York", "London", "Paris", "Tokyo"],
        answer: "Paris"
    },
    {
        question:"What is 2+2 ?",
        options:[2,4,6,8],
        answer:"4"
    },
    {
        question:"What is capital of Canada?",
        options:["Toronto","Ottawa","Paris","California"],
        answer:"Ottawa"
    }
];

function renderQuiz(){
    const container = document.getElementById("quizContainer");
    
    quizQuestions.forEach((question,index)=>{
        const questionElement = document.createElement('div');
        questionElement.className='question';
        questionElement.textContent = question.question

        question.options.forEach(option=>{
           const label = document.createElement('label');
           const radioInput = document.createElement("input");
           radioInput.type='radio';
           radioInput.name = 'question'+index;
           radioInput.value = option;
           label.appendChild(radioInput);
           label.append(option)
           questionElement.appendChild(label);
        });

        container.appendChild(questionElement);
    })
}

function handleSubmit(){
    let score = 0;
    quizQuestions.forEach((question,index)=>{
        const selected = document.querySelector(`input[name="question${index}"]:checked`)
        console.log(selected,question.answer)
        if(selected && selected.value==question.answer){
            score++;
        }
    })

    document.getElementById("result").textContent = `Your score is : ${score}`
}

document.addEventListener("DOMContentLoaded",renderQuiz);
submitBtn.addEventListener("click",handleSubmit)






