$(function(){

  function grid() {
    var $grid = $('.grid');
    $grid.imagesLoaded(function () {
        $grid.masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: function( containerWidth ) {
                return containerWidth / 3
            },
        });
    });
  }

  function result() {
    $('.grid').detach();
    var photo = $('#field').val();

    $.ajax({
      url: 'https://pixabay.com/api/?key=2788941-0a373ce37d21ecbac548a1f3e&q=' + photo + '&image_type=all&category=travel&callback=JsonpCallback',
      dataType: 'jsonp',
      success: function (data) {
        if (data.hits.length) {
          var html = $('#masonry').html();
          var pictures = tmpl(html, data);
          $('.pictures__block').append(pictures);
          grid();
        } else {
          console.log('No hits!');
        }
      },
    })
  }

  result();


  $( '#field' ).keydown(function( event ) {
    if ( event.which == 13 ) {
      event.preventDefault();
      result();
      $('#field').val('');
    }
  })


  $('#search').on('click', function(e) {
      e.preventDefault();
      result();
      $('#field').val('');
  })
});
