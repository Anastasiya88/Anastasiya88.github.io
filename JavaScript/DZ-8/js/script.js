$(function () {

  function result(e) {
    e.preventDefault();
    $('a').detach();
    var photo = $('#field').val();

    $.ajax({
      url: 'https://pixabay.com/api/?key=2788941-0a373ce37d21ecbac548a1f3e&q=' + photo + '&image_type=all&category=travel&callback=JsonpCallback',
      dataType: 'jsonp',
      success: function(data) {
        for (var i = 0; i < data.hits.length; i++) {
          if (parseInt(data.totalHits) > 0) {
            $('.response').append("<a href='#'><img src = " + data.hits[i].previewURL + "  ></a>" );
          } else {
            console.log('No hits');
          };
        };
      },
    });
  };

  $( '#field' ).keydown(function( event ) {
    if ( event.which == 13 ) {
      event.preventDefault();
      result(event);
    }
  });


  $('#search').on('click', result);

  function Human() {
    this.name = "Vasya";
    this.gender = "man";
    this.age = 32;
    this.growth = 180;
    this.weight = 72;
  };

  var newHuman = new Human();

  console.log("Human", Human);


  function Worker() {
    this.work = "Google";
    this.payment = "300$";
    this.working = function(){
      alert("I am working hard!");
    };
  };

  Worker.prototype = newHuman;

  console.log("newHuman.growth", newHuman.growth);
  console.log("newHuman.age", newHuman.age);

  function Student() {
    this.study = "KPU";
    this.scholarship = "300$";
    this.watching = function(){
      alert("I am watching TV series!");
    };
  };

  Student.prototype = newHuman;


  var newStudent = new Student();
  var newStudent1 = new Student();
  var newStudent2 = new Student();
  var newStudent3 = new Student();
  var newStudent4 = new Student();

  console.log("newStudent", newStudent);
  console.log("newStudent1", newStudent1);
  console.log("newStudent2", newStudent2);
  console.log("newStudent3", newStudent3);
  console.log("newStudent4", newStudent4);

  var newWorker = new Worker();
  var newWorker1 = new Worker();
  var newWorker2 = new Worker();
  var newWorker3 = new Worker();
  var newWorker4 = new Worker();

  console.log("newWorker", newWorker);
  console.log("newWorker1", newWorker1);
  console.log("newWorker2", newWorker2);
  console.log("newWorker3", newWorker3);
  console.log("newWorker4", newWorker4);

});
