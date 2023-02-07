let count = 0;
let timeoutId;

function countUp() {
    count++;
    document.querySelector('#seconds').innerHTML = count;
    timeoutId = setTimeout(countUp, 1000);
}

document.querySelector('#start').addEventListener('click', function startCountUp() {
    timeoutId = setTimeout(countUp, 1000);
});

document.querySelector('#stop').addEventListener('click', function stopCountUp() {
    clearTimeout(timeoutId);
});



