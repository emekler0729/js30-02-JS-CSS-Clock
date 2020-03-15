const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

const smoothTransition = function() {
    const secondTransition = secondHand.style.transition;
    const minuteTransition = minuteHand.style.transition;
    const hourTransition = hourHand.style.transition;

    return function(h, m, s) {
        if (s === 59) {
            secondHand.style.transition = 'none';
        } else if (s === 1) {
            secondHand.style.transition = secondTransition;
        }

        if (m === 59) {
            minuteHand.style.transition = 'none';
        } else if (m === 1) {
            minuteHand.style.transition = minuteTransition;
        }

        if (h === 11) {
            hourHand.style.transition = 'none';
        } else if (h === 1) {
            hourHand.style.transition = hourTransition;
        }
    }
}();

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const hoursDegrees = (hours / 12) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    smoothTransition(hours, minutes, seconds);
}
    
setInterval(setDate, 1000);