

   // Date

   const d = new Date();
   document.getElementById("yDate").innerHTML = d.getFullYear();  

const d2 = new Date();
document.getElementById("mDate").innerHTML = d2.getMonth() + 1;

const d3 = new Date();
document.getElementById("dDate").innerHTML = d3.getDate();


// Countdown Counter


   var countDate = new Date('Jan 01, 2023 00:00:00').getTime();
   function newYear(){
       var now = new Date().getTime();
       gap = countDate - now;

       var second = 1000;
       var minute = second * 60;
       var hour = minute * 60;
       var day = hour * 24;

       var d = Math.floor(gap / (day));
       var h = Math.floor((gap % (day)) / (hour));
       var m = Math.floor((gap % (hour)) / (minute));
       var s = Math.floor((gap % (minute)) / (second));

       document.getElementById('day').innerText = d;
       document.getElementById('hour').innerText = h;
       document.getElementById('minute').innerText = m;
       document.getElementById('second').innerText = s;
   }

   setInterval(function(){
       newYear();
   },1000)


   

