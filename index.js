const quiz = document.getElementById('quiz');
const quest = document.getElementById('quest');
const list = document.getElementById('list');
const lies = document.getElementsByClassName('li');
let number = 0;
let leftTasks=[];
const correctAnswers =[];

const tasks = [
    {
        question: 'сколько мне лет?',
        answers:[21,26,29],
        correctAnswer: 29,
        wasQuestionAnswered: false,
        chosenAnswer:''
    },
    {
        question: 'любимый цвет?',
        answers:['желтый','фиолетовый','красный'],
        correctAnswer: 'фиолетовый',
        wasQuestionAnswered: false,
        chosenAnswer:''
    },

    {
        question: 'любимое блюдо?',
        answers:['пицца','паста','шаурма'],
        correctAnswer: 'пицца',
        wasQuestionAnswered: false,
        chosenAnswer:''
    }
];

function addQuestion(){

    console.log(correctAnswers);
    console.log(tasks);
    leftTasks = tasks.filter(task=>{return !task.wasQuestionAnswered});
    number = getRandomInt(0,leftTasks.length);

    if(leftTasks.length){
    leftTasks[number].wasQuestionAnswered = true;
    quest.innerText = leftTasks[number].question;
    leftTasks[number].answers.sort(compareRandom).forEach((answer,idx)=>{lies[idx].innerText=answer});
    }else{
        removeListener();
        alert(`your score is ${correctAnswers.length}`)
    }
}

addQuestion();

function next(event){
   if(leftTasks[number].correctAnswer == event.target.innerText){
    correctAnswers.push(event.target.innerText);
   }
    addQuestion();
}

for(let i=0; i<lies.length; i++){
    lies[i].addEventListener('click', next);
}

function removeListener(){
    for(let j=0; j<lies.length; j++){
        lies[j].removeEventListener('click', next);
    }
}

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}




// function filter(){
//    return filteredTasks = tasks.filter(task=>!task.wasQuestionAnswered);
// }

// const pushQuestion = () =>{
    
//     filter();
//     console.log(filteredTasks);
 
    
//    if(filteredTasks.length){
        
//         number = getRandomInt(0,filteredTasks.length+1);
//         console.log(number);
//         tasks[number].wasQuestionAnswered = true; 
//         quest.innerText = tasks[number].question;
//         tasks[number].answers.forEach((answer,idx) => {
//         lies[idx].innerText = answer; 
//     });
//    }else{
//     removeListener();
//     countRightnAnswers();
//    }
// }
// pushQuestion();



// function nextQuestion(event) {
//     if(event){
//         tasks[number].chosenAnswer = event.target.innerText;
        
//     }
//     console.log(tasks);
//     pushQuestion();
//   }

// addListener();

// function addListener(){
//     for(let i=0; i<lies.length; i++){
//         lies[i].addEventListener('click', nextQuestion)  
//      }
// }

// function removeListener(){
//     for(let i=0; i<lies.length; i++){
//         lies[i].removeEventListener('click', nextQuestion)  
//      }
// }

// function countRightnAnswers(){
//     const amount = tasks.filter(task=>{return task.correctAnswer==task.chosenAnswer})
//     console.log(`правильных ответов ${amount.length}`);
// }



// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
























































































// let question = document.getElementById('question');
// let button = document.getElementById('next');
// let answersList = document.querySelector('ol');
// const list = document.getElementsByTagName('li');
// let radio = '<input name="radio" type="radio">';
// let click = 0;
// let score = 0;
// userAnswer= [];


// const tasks = [
   
//     ['сколько мне лет?', 21, 26, 29, 21],
//     ['любимый цвет?', 'желтый', 'фиолетовый', 'крысный', 'фиолетовый' ],
//     ['любимое блюдо', 'пицца', 'шаурма', 'паста', 'пицца']
// ]


// function pushQuestion(e) {

//     question.innerHTML = tasks[click][0];
//     list[0].innerHTML =  radio +  tasks[click][1];
//     list[1].innerHTML = radio +  tasks[click][2];
//     list[2].innerHTML = radio +  tasks[click][3];
//     click++;
// }

// for(let i = 0; i < list.length; i++) {
//     list[i].addEventListener("click", pushQuestion);
// }








