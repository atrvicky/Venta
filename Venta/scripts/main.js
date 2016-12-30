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
//  console.log(seconds);
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

var checker = new RegExp("in");
/*----------Get panel classes for accordion headings-----------*/
var oneOne = document.getElementById('headingOO');
var oneTwo = document.getElementById('headingOT');
var oneThree = document.getElementById('headingOTh');
var twoOne = document.getElementById('headingTO');
var twoTwo = document.getElementById('headingTT');
var twoThree = document.getElementById('headingTTh');
var threeOne = document.getElementById('headingThO');
var threeTwo = document.getElementById('headingThT');
var threeThree = document.getElementById('headingThTh');
/*----------Get panel classes for accordions-----------*/
var panelOneOne = document.getElementById('collapseOneOne');
var panelOneTwo = document.getElementById('collapseOneTwo');
var panelOneThree = document.getElementById('collapseOneThree');
var panelTwoOne = document.getElementById('collapseTwoOne');
var panelTwoTwo = document.getElementById('collapseTwoTwo');
var panelTwoThree = document.getElementById('collapseTwoThree');
var panelThreeOne = document.getElementById('collapseThreeOne');
var panelThreeTwo = document.getElementById('collapseThreeTwo');
var panelThreeThree = document.getElementById('collapseThreeThree');
/*----------Get fa Circle classes-----------*/
var circleOO = document.getElementById('faCircleOO');
var circleOT = document.getElementById('faCircleOT');
var circleOTh = document.getElementById('faCircleOTh');
var circleTO = document.getElementById('faCircleTO');
var circleTT = document.getElementById('faCircleTT');
var circleTTh = document.getElementById('faCircleTTh');
var circleThO = document.getElementById('faCircleThO');
var circleThT = document.getElementById('faCircleThT');
var circleThTh = document.getElementById('faCircleThTh');
/*----------Get fa Angle classes-----------*/
var angleOO = document.getElementById('faAngleOO');
var angleOT = document.getElementById('faAngleOT');
var angleOTh = document.getElementById('faAngleOTh');
var angleTO = document.getElementById('faAngleTO');
var angleTT = document.getElementById('faAngleTT');
var angleTTh = document.getElementById('faAngleTTh');
var angleThO = document.getElementById('faAngleThO');
var angleThT = document.getElementById('faAngleThT');
var angleThTh = document.getElementById('faAngleThTh');

oneOne.onclick=function(){
  if (checker.test(panelOneOne.getAttribute("class"))) {
    circleOO.style.color = "#bfbfbf";
    faAngleOO.setAttribute("class","fa fa-angle-down")
    console.log("down");
  } else {
    circleOO.style.color = "#e53935";
    faAngleOO.setAttribute("class","fa fa-angle-up")
    console.log("up");
  }
}

/*----------Stats Section Counter-----------*/
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.riseOne').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
