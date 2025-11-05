let count = 0;
const display = document.getElementById('count-display');
const button = document.getElementById('increment-btn');
const resetButton = document.getElementById('reset-btn');

button.addEventListener('click', () => {
    count++;
    display.innerText = count;
});
resetButton.addEventListener('click', () => {
    count = 0;
    display.innerText = count;
});