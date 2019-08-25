const quiz = document.getElementById('quiz');
const questionField = document.getElementById('question');
const list = document.getElementById('list');
const lies = document.getElementsByClassName('li');
const header = document.getElementById('header');
let number = 0;
const correctAnswers = [];


const filteredTasks = tasks.sort(compareRandom);

function addQuestion() {
    console.log(correctAnswers);
    if (number < filteredTasks.length) {
        questionField.innerText = filteredTasks[number].question;
        filteredTasks[number].answers.sort(compareRandom).forEach((answer, idx) => { lies[idx].innerText = answer });
    } else {
        header.remove();
        list.remove();
        let result = document.createElement('div');
        result.className = 'result';
        if ((correctAnswers.length / filteredTasks.length * 100) > 50) {
            result.innerHTML = `<div>Молодец! Правильных ответов: ${correctAnswers.length / filteredTasks.length * 100}%</div><div>(${correctAnswers.length} из ${filteredTasks.length})</div>`
        } else {
            result.innerHTML = `<div>Соберись и попробуй еще раз! Правильных ответов: ${correctAnswers.length / filteredTasks.length * 100}%</div><div>(${correctAnswers.length} из ${filteredTasks.length})</div>`
        }
        quiz.append(result);
    }
}

function next(event) {
    if (filteredTasks[number].correctAnswer == event.target.innerText) {
        correctAnswers.push(event.target.innerText);
    }
    number++;
    addQuestion();
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function addListener() {
    for (let i = 0; i < lies.length; i++) {
        lies[i].addEventListener('click', next);
    }
}

function removeListener() {
    for (let i = 0; i < lies.length; i++) {
        lies[i].removeEventListener('click', next);
    }
}


addQuestion();
addListener();
