import { printError, printResult } from './printResult.js'
import  getDateDiff  from './getDateDiff.js'
import "./switchClick.js"
import timer from "./timerNew.js"


const form = document.getElementById('datecalc');


form.onsubmit = (event) => {
    event.preventDefault();
 
    const formData = new FormData(event.target);

    const firstDate = formData.get('firstDate');
    const secondDate = formData.get('secondDate');

    console.log(firstDate, secondDate);

    if (!firstDate || !secondDate) {
        printError('Oh, stop it you!')
    }else{
        const dateDiff = getDateDiff(firstDate, secondDate);
        printResult(dateDiff)
    }
};

const timerInput = document.getElementById("minute");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    const timerMinute = parseInt(timerInput.value) * 60
    timer(timerMinute);
});

stopBtn.addEventListener('click', function(event) {
    event.preventDefault();
    clearInterval(timer);
});

clearTimeout(t);
clearInterval(interval);


