$(document).ready(function(){
  $('.dropdown-submenu a.venues').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
