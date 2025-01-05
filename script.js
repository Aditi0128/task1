let startTime, elapsedTime = 0;
let interval;
const display = document.getElementById('display');
const laps = document.getElementById('laps');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');

function updateTime() {
    const now = Date.now();
    const diff = elapsedTime + (now - startTime);
    const milliseconds = diff % 1000;
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 60000) % 60);
    const hours = Math.floor(diff / 3600000);

    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

function start() {
    startTime = Date.now();
    interval = setInterval(updateTime, 10);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    lapBtn.disabled = false;
}

function pause() {
    elapsedTime += Date.now() - startTime;
    clearInterval(interval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function reset() {
    clearInterval(interval);
    elapsedTime = 0;
    display.textContent = "00:00:00.000";
    laps.innerHTML = "";
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    lapBtn.disabled = true;
}

function lap() {
    const lapTime = document.createElement('div');
    lapTime.textContent = display.textContent;
    laps.appendChild(lapTime);
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);
