
const clock = $('.onlineTimer');

function getTime(){
   let time = new Date();
   let hour = time.getHours();
   let minutes = time.getMinutes();
   let seconds = time.getSeconds();
   let dayNight = 'AM';

   if(hour > 12){hour -= 12;dayNight='PM'}

   if(hour < 10){hour = '0' + hour;}
   if(minutes < 10){minutes = '0' + minutes;}
   if(seconds < 10){seconds = '0' + seconds;}

   let timeString = `${dayNight}` +`${hour}` + ':' + `${minutes}` + ':' + `${seconds}`;

   clock.html(timeString);
}

function start(){
   setInterval(getTime,1000);
}

start();