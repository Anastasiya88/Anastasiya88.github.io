$('.field').hover(function(e){
  var $input = $(e.target);
  $input.siblings('.tooltipe').show();
},
function(e){
  var $input = $(e.target);
  $input.siblings('.tooltipe').hide();
});
$("#help").click(function(){
  $('.tooltipe').show();
});
