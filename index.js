function showTime(){
// alert("I got clicked");
var date=new Date();
// alert(date);
var hours=date.getHours();
var minutes=date.getMinutes();
var seconds=date.getSeconds();
var session="AM";
// alert("hours="+hours+" minutes="+minutes+" seconds="+seconds);

if (hours>12) {
    hours=hours-12;
    session="PM";
}

if (hours==0) {
    hours=0;
}

if(hours<10){
    hours="0"+hours;
}

if(minutes<10){
    minutes="0"+minutes;
}
if(seconds<10){
    seconds="0"+seconds;
}
var time=hours + ":"+minutes+":"+seconds+" "+session;
document.getElementById("MyClock").innerHTML=time;
document.getElementById("MyClock").textContent=time;

setTimeout(showTime,1000);
}

showTime();