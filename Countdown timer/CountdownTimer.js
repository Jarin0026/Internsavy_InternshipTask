let mins=document.getElementById("minutes");
let secs=document.getElementById("seconds");
let display=document.getElementById("display");
let start=document.getElementById("start");

//display time
function displaymin(){
    display.innerHTML=(minutes.value>9?minutes.value:'0'+minutes.value)+':'+(seconds.value>9?seconds.value:'0'+seconds.value);
}

//CountDown function
function watch(){
    start.disabled=true;  //the starts button will be disabled once the timer starts
    mins.disabled=true;
    secs.disabled=true;  //mins and secs will also be disabled

    var date1=new Date();  //today's date

    var CountDownDate=new Date();   //time from which the countdown will start

    //setting the countDown date
    CountDownDate.setTime(date1.getTime()+(minutes.value*60*1000)+(seconds.value*1000)+(1*1000));

    //Update the countdown every one second
    var x=setInterval(function(){
        //get today's date and time
        var now=new Date().getTime();

        //find the distance between new and countdown date
        var distance=CountDownDate-now;

        //Time calculations for minutes and seconds
        var minutes=Math.floor((distance%(1000*60*60))/(1000*60));

        var seconds=Math.floor((distance%(1000*60))/1000);

        //Display the result in the element with id="display"

        display.innerHTML=(minutes>9?minutes:'0'+minutes)+':'+(seconds>9?seconds:0+seconds);

        
        if(display.innerHTML=='00:0'){
            clearInterval(x);
        }
    },1000)
}


var reload=document.getElementById("reset");
reload.addEventListener('click',function(){
    window.location.reload();
});