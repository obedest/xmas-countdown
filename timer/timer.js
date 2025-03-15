const timer = document.querySelector(".timer")
const title = document.querySelector(".timer-container h1")

const timerLoop = setInterval(countdownTimer, 1000);

function countdownTimer() {

    const currentTime = new Date();

    const futureTime = new Date(2025, 11, 25, 00, 00, 00);
    
    const deltaTime = futureTime - currentTime; 

    //Calculations
    const daysCalc = deltaTime/(1000*60*60*24);
    const days = Math.floor(daysCalc);

    const hoursCalc = (daysCalc - days)*24;
    const hours = Math.floor(hoursCalc);

    const minCalc = (hoursCalc - hours)*60;
    const min = Math.floor(minCalc);

    const secCalc = (minCalc - min)*60;
    const sec = Math.floor(secCalc);

    timer.innerHTML = `
    <div data-label="DAY">${days}</div>
    <div data-label="HR">${hours}</div>
    <div class="colon">:</div>
    <div data-label="MIN">${min}</div>
    <div class="colon">:</div>
    <div data-label="SEC">${sec}</div>`;

    if (deltaTime <= 0) {
        clearInterval(timerLoop);
        timer.innerHTML = "<h1 class = 'flash'>Merry X-Mas!</h1>";
        title.innerHTML = "<i class='fas fa-holly-berry fa-3x flash'></i>";
    }
};