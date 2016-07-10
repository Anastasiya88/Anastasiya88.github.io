$(function(){

  var click;
  $('.nav__link').filter(':first').addClass('nav__link__active');
  $('.banners__elem').filter(':first').parent().find('.banners__text').slideDown();
  $('.banners__elem').filter(':first').html('-');
  $('.banners__elem').filter(':first').addClass('banners__active');
  $('.banners__elem').filter(':first').parent().find('.banners__item__title').addClass('banners__active');


  $('.nav__link').on('click', function (){
    $('.nav__link').removeClass('nav__link__active');
    $(this).addClass('nav__link__active');
    return false;
  }).filter(':first').click();

  $('.banners__elem').on('click', function (){
    if (click !== true) {
      $('.banners__elem').html('+');
      $('.banners__elem').removeClass('banners__active');
      $('.banners__item__title').removeClass('banners__active');
      $('.banners__text').slideUp();
      $(this).parent().find('.banners__text').slideDown();
      $(this).html('-');
      $(this).addClass('banners__active');
      $(this).parent().find('.banners__item__title').addClass('banners__active');
    } else {
      $(this).parent().find('.banners__text').slideUp();
      $(this).removeClass('banners__active');
      $(this).parent().find('.banners__item__title').removeClass('banners__active');
    }
  });

});
