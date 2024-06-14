let timerInterval;
let elapsedTime = 0; // in seconds

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(elapsedTime);
}

function startTimer() {
    timerInterval = setInterval(() => {
        elapsedTime++;
        updateTimerDisplay();
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateTimerDisplay();
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize buttons state
stopButton.disabled = true;
resetButton.disabled = true;
updateTimerDisplay();
