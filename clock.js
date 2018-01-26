document.addEventListener('DOMContentLoaded', function() {
   console.log("DOM fully loaded and parsed");
var degrees = 0;
 
var secondsDegrees = 0
var second = document.getElementById("second");
setInterval(function(){
second.style.transform = "rotate(" + degrees + "deg)";
degrees = degrees + 6;
}, 1000);
   
 
var minutesDegrees = 0;
var minute = document.getElementById("minute");
setInterval(function(){
minute.style.transform = "rotate(" + degrees + "deg)";
degrees = degrees + 6;
}, 60000);
 
   
var hoursDegrees = 0;
var hour = document.getElementById("hour");
setInterval(function(){
hour.style.transform = "rotate(" + degrees + "deg)";
degrees = degrees + 6;
}, 3.6e+6);
 
});
 
 