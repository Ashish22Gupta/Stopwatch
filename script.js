let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTimer, 10); // Update every 10 milliseconds
    }
}

function stopTimer() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('timer').innerText = '00:00:00.000';
}

function updateTimer() {
    milliseconds = milliseconds + 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    document.getElementById('timer').innerText = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds) + '.' +
        (milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds);
}