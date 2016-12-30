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

/*----------Prices section-----------*/
var r = document.getElementById('red').childNodes;
var g = document.getElementById('green').childNodes;
var b = document.getElementById('blue').childNodes;
var v = document.getElementById('violet').childNodes;
var rd = document.getElementById('red');
var gr = document.getElementById('green');
var bl = document.getElementById('blue');
var vl = document.getElementById('violet');

r[9].style.backgroundColor="#e53935";
r[5].style.backgroundColor="#e53935";
g[9].style.backgroundColor="#43a047";
g[5].style.backgroundColor="#43a047";
b[9].style.backgroundColor="#3949ab";
b[5].style.backgroundColor="#3949ab";
v[9].style.backgroundColor="#9c27b0";
v[5].style.backgroundColor="#9c27b0";

rd.addEventListener("mouseover", highlightRed);
gr.addEventListener("mouseover", highlightGreen);
bl.addEventListener("mouseover", highlightBlue);
vl.addEventListener("mouseover", highlightViolet);
rd.addEventListener("mouseout", unHighlightRed);
gr.addEventListener("mouseout", unHighlightGreen);
bl.addEventListener("mouseout", unHighlightBlue);
vl.addEventListener("mouseout", unHighlightViolet);

function unHighlightRed(){
  r[1].style.color="#000";
  r[3].style.color="#000";
  r[5].style.backgroundColor="#e53935";
  r[7].style.color="#000";
  r[9].style.color="#fff";
  r[9].style.backgroundColor="#e53935";
  rd.style.backgroundColor="#fff";
}

function unHighlightBlue(){
  b[1].style.color="#000";
  b[3].style.color="#000";
  b[5].style.backgroundColor="#3949ab";
  b[7].style.color="#000";
  b[9].style.color="#000";
  b[9].style.backgroundColor="#3949ab";
  bl.style.backgroundColor="#fff";
}

function unHighlightViolet(){
  v[1].style.color="#000";
  v[3].style.color="#000";
  v[5].style.backgroundColor="#9c27b0";
  v[7].style.color="#000";
  v[9].style.color="#000";
  v[9].style.backgroundColor="#9c27b0";
  vl.style.backgroundColor="#fff";
}

function unHighlightGreen(){
  g[1].style.color="#000";
  g[3].style.color="#000";
  g[5].style.backgroundColor="#43a047";
  g[7].style.color="#000";
  g[9].style.color="#000";
  g[9].style.backgroundColor="#43a047";
  gr.style.backgroundColor="#fff";
}

/*-----------------------------*/
function highlightRed(){
  r[1].style.color="#fff";
  r[3].style.color="#fff";
  r[5].style.backgroundColor="#fff";
  r[7].style.color="#fff";
  r[9].style.color="#fff";
  rd.style.backgroundColor="#e53935";
}

function highlightBlue(){
  b[1].style.color="#fff";
  b[3].style.color="#fff";
  b[5].style.backgroundColor="#fff";
  b[7].style.color="#fff";
  b[9].style.color="#fff";
  bl.style.backgroundColor="#3949ab";
}

function highlightViolet(){
  v[1].style.color="#fff";
  v[3].style.color="#fff";
  v[5].style.backgroundColor="#fff";
  v[7].style.color="#fff";
  v[9].style.color="#fff";
  vl.style.backgroundColor="#9c27b0";
}

function highlightGreen(){
  g[1].style.color="#fff";
  g[3].style.color="#fff";
  g[5].style.backgroundColor="#fff";
  g[7].style.color="#fff";
  g[9].style.color="#fff";
  gr.style.backgroundColor="#43a047";
}
