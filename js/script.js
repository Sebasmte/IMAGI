window.onload = function(){

    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");

    var interval;

    buttonStart.onclick = function (){
        clearInterval(interval);
        interval = setInterval(starTimer, 10);
    }
    
    buttonStop.onclick = function(){
        clearInterval(interval);

    }

    buttonReset.onclick = function(){

        clearInterval(interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }


    function starTimer (){
        tens++;

        if (tens <=9){
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9){
            appendTens.innerHTML = tens;

        }

        if (tens > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendSeconds.innerHTML = "0" + 0;
        }

        if (seconds >0){
            appendSeconds.innerHTML = seconds;
        }
    }

}