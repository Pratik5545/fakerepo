let count = 0;
const display = document.getElementById('count-display');
const button = document.getElementById('increment-btn');

button.addEventListener('click', () => {
    count++;
    display.innerText = count;
});