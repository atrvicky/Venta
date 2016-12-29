var sliderBGs = ["images/placeholders/dummyimg (4).jpg", "images/placeholders/dummyimg (24).jpg", "images/placeholders/dummyimg (30).jpg"];
var dates = ['21 september', '22 september', '23 september'];
var venues = ['Mountain View, New York', 'Palo Alto, california', 'New Orleans, Louisiana']
var titles = ['Venta Conference', 'Venta Challenge', 'Venta Extreme']
decI=0;

document.getElementById('sliderBtnLeft').onclick = function(){
  if (decI==0){
    decI=2;
  } else{
    decI--;
  }
  document.getElementById('item').src = sliderBGs[decI];
  document.getElementById('itemDate').innerHTML = dates[decI];
  document.getElementById('itemVenue').innerHTML = venues[decI];
  document.getElementById('itemTitle').innerHTML = titles[decI];
  //console.log(sliderBGs[decI]);
  //console.log(decI);
};

document.getElementById('sliderBtnRight').onclick = function(){
  if (decI==2){
    decI=0;
  } else{
    decI++;
  }
  document.getElementById('item').src = sliderBGs[decI];
  document.getElementById('itemDate').innerHTML = dates[decI];
  document.getElementById('itemVenue').innerHTML = venues[decI];
  document.getElementById('itemTitle').innerHTML = titles[decI];
  //console.log(sliderBGs[decI]);
  //console.log(decI);
};
