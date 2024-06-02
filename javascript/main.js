let countDownDate = new Date("Jun 09, 2024 00:00:00").getTime();
let errorBody = document.querySelector('.errorBody')
let welcomeBody = document.querySelector('.welcomeBody')
let successBody = document.querySelector('.successBody')



let slider = document.getElementById('slider')
let cake = document.getElementById('cake')
cake.style.backgroundPosition= '0 '+"-"+slider.value+"px"
slider.oninput=function(){
    cake.style.backgroundPosition= '0 '+"-"+slider.value+"px"
    
    if(slider.value == '100'){
        welcomeBody.style.display = "none"
        successBody.style.display = 'block'
    }
}


var x = setInterval(function(){
    let now = new Date().getTime()
    let distance = countDownDate - now


    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    if(days < 10){
        document.getElementById("days").innerHTML = "0"+days
    }

    if(hours < 10){
        document.getElementById("hours").innerHTML = "0"+hours
    }
    if(minutes < 10){
        document.getElementById("mins").innerHTML = "0"+minutes
    }
    if(seconds < 10){
        document.getElementById("secs").innerHTML = "0"+seconds
    }

    if(distance < 0){
        clearInterval(x)
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("mins").innerHTML = "00";
        document.getElementById("secs").innerHTML = "00";

        errorBody.style.display = 'none'
        welcomeBody.style.display = 'block'
    }
},1000)
