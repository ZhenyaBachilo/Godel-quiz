
let question = document.getElementById('question');
let button = document.getElementById('next');
let answersList = document.querySelector('ol');
const list = document.getElementsByTagName('li');
let radio = '<input name="radio" type="radio">';
let click = 0;
let score = 0;
userAnswer= [];


const tasks = [
   
    ['сколько мне лет?', 21, 26, 29, 21],
    ['любимый цвет?', 'желтый', 'фиолетовый', 'крысный', 'фиолетовый' ],
    ['любимое блюдо', 'пицца', 'шаурма', 'паста', 'пицца']
]


function pushQuestion(e) {
    // if(click!==0 && e.target.innerText===tasks[click][0]){
    //     score++;
    //     console.log('!');
    // }
    question.innerHTML = tasks[click][0];
    list[0].innerHTML =  radio +  tasks[click][1];
    list[1].innerHTML = radio +  tasks[click][2];
    list[2].innerHTML = radio +  tasks[click][3];
    click++;
}

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", pushQuestion);
}








