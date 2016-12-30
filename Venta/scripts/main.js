$(document).ready(function(){
  $('.dropdown-submenu a.venues').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

var timer = setInterval(clock, 1000);
var days = 27;
var hours = 20;
var minutes = 46;
var seconds = 27;

function clock() {

  console.log(seconds);

  seconds--;
  if (seconds == 0) {
    minutes--;
    seconds = 60;
  }
  if (minutes == 0) {
    hours--;
    minutes = 60;
  }
  if (hours == 0) {
    days--;
    hours = 24;
  }

document.getElementById('remDays').innerHTML = days;
document.getElementById('remHours').innerHTML = hours;
document.getElementById('remMinutes').innerHTML = minutes;
document.getElementById('remSeconds').innerHTML = seconds;
}
