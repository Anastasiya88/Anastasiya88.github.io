$(function(){
  var tabs = $('div.tabs > div');
  tabs.hide().filter(':first').show();
  $('div.tabs ul.tabs__menu a').click(function(){
    tabs.hide();
    tabs.filter(this.hash).show();
    $('div.tabs ul.tabs__menu a').removeClass('selected');
    $(this).addClass('selected');
    return false;
  }).filter(':first').click();
});
