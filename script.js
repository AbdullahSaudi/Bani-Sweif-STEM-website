/*Side Bar*/

$('#bar').click(function(){
    $('#header div ul').addClass('active')
});

$('#bar-close').click(function(){
    $('#header div ul').removeClass('active')
});

/* The Timer */

// Get the needed date
let countDownDate = new Date("Dec 17, 2022 11:59:59").getTime();


let counter = setInterval(() => {
    //Get date now
    let dateNow = new Date().getTime();

    //find the difference between now and countdown date
    let dateDiff = countDownDate - dateNow;

    //Get time units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    if (dateDiff < 0) {
        clearInterval(counter)
    }

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000)