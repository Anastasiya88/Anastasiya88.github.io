$(function(){

    $('.slider-mobile').slick({
      dots: true
    });

    $('.slider-desktop').slick({
      dots: true
    });

    $( '.dropdown' ).bind("mouseenter", function () {
      $(this).find('ul').stop(true, true);
      $(this).children('.nav-desktop__sublist').slideDown(1000).animate({ fontSize: "14px",  backgroundColor: "#9E9E9E", opacity: 0.95 }, 400 );
    });
    $('.dropdown__bottom' ).bind("mouseleave", function () {
      $(this).children('.nav-desktop__sublist').slideUp(500).animate({ fontSize: "10px", backgroundColor: "#E2B9B6", opacity: 0.35 }, 400 );
    });
    $('.dropdown__top' ).bind("mouseleave", function () {
      $(this).slideUp(500).animate({ fontSize: "10px", backgroundColor: "#E2B9B6", opacity: 0.35 }, 400 );
    });


});
