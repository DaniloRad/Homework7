function main() {



    var $ = function (id) {
        return document.getElementById(id);
    }
    var TwentyMin=$("pomodoro");
    var TenMin=$("short_break");
    var FiveMin=$("long_break");  
    var Clock = $("currTime");
    var TIME;
    TwentyMin.addEventListener("click",function() {     TIME = "25:00";
        Clock.innerHTML=TIME;
        document.getElementsByClassName("time")[0].style.display="block";
        document.getElementsByClassName("buttons")[0].style.display="block";

    
    
    
    })
    TenMin.addEventListener("click",function() {  TIME = "10:00";
    Clock.innerHTML=TIME;})
    FiveMin.addEventListener("click",function() {  TIME = "05:00";
    Clock.innerHTML=TIME})

    var StartB = $("start");
    var StopB = $("stop");
    var ResetB = $("reset");
 
    var Interval;

    function Clock1() {
        var currTime = (Clock.innerHTML.trim());
        var MinAndSec = currTime.split(":");
        return MinAndSec[0]
    }

    function Clock2() {
        var currTime = (Clock.innerHTML.trim());
        var MinAndSec = currTime.split(":");
        return MinAndSec[1]
    }
    var repeat = function () {
        Interval = setInterval(function () {
            SecondByOne(parseInt(Clock1()), parseInt(Clock2()), Interval)
        }, 1000);

    }

    StartB.addEventListener("click", repeat);
    StopB.addEventListener("click", Stop)
    ResetB.addEventListener("click", function () {
        Clock.innerHTML = TIME;
        Stop();
    })

    function Stop() {

        clearInterval(Interval)

    }



    function SecondByOne(Min, Sec) {
        Sec--;
console.log(Sec)
        if (Sec === 0 && Min === 0) {

            var snd=new Audio("beep.mp3");
            snd.play();
            clearInterval(Interval)

        } else if (Sec === -1) {
            Sec = 59;
            Min--;
        } 
        var Clock = $("currTime");
        var Title=document.getElementsByTagName("title")[0];
        if (Sec < 10) {
            Clock.innerHTML = Min + ":0" + Sec;
            Title.innerHTML = Min + ":0" + Sec;


        } else if (Min < 10) {
            Clock.innerHTML = "0" + Min + ":" + Sec;
            Title.innerHTML = "0" + Min + ":" + Sec;

        } else if (Sec < 10 && Min < 10) {
            Clock.innerHTML = "0" + Min + ":0" + Sec;
            Title.innerHTML = "0" + Min + ":0" + Sec;

        } else {
            Clock.innerHTML = Min + ":" + Sec;
            Title.innerHTML =  Min + ":" + Sec;

        }


    }
}
main();