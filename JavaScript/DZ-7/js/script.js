'use strict';

$(function(){

  var test = {

    title: "Тест по программированию",
    questions: [
      {
        ask: "1.Вопрос №1",
        answers: [
          {
            text:'Вариант ответа №1',
            id: 1,
            correct: "true",
          },
          {
            text:'Вариант ответа №2',
            id: 2,
            correct: false,
          },
          {
            text:'Вариант ответа №3',
            id: 3,
            correct: true,
          }],
      },
      {
        ask: "2.Вопрос №2",
        answers: [
          {
            text:'Вариант ответа №1',
            id: 4,
            correct: false,
          },
          {
            text:'Вариант ответа №2',
            id: 5,
            correct: false,
          },
          {
            text:'Вариант ответа №3',
            id: 6,
            correct: true,
          }],
      },
      {
        ask: "3.Вопрос №3",
        answers: [
          {
            text:'Вариант ответа №1',
            id: 7,
            correct: false,
          },
          {
            text:'Вариант ответа №2',
            id: 8,
            correct: true,
          },
          {
            text:'Вариант ответа №3',
            id: 9,
            correct: true,
          }],
      },
    ],
    check: "Проверить мои результаты",
    reset: "Попробовать ещё раз",
  };

  var setObj = JSON.stringify(test);
  localStorage.setItem("test", setObj);
  console.log( "setObj", setObj);

  var test = JSON.parse(localStorage.getItem("test"));
  console.log( "test", test);

  var html = $("#testing").html();
  var content = tmpl(html,test);
  $('body').append(content);

  var $checkboxes = $("input:checked");
  var checkedAnswers = [];
  var allAnswers = [];
  var correctAnswers =[];
  var testSuccessful = true;
  var totalCorrectAnswers = 0;

  $checkboxes.each(function ($item) {
    checkedAnswers.push( $item.attr("id"));
  });


  for(var i = 0; i < test.questions.length; i++) {
    allAnswers = allAnswers.concat(test.questions[i].answers);
  };

  // for (var i = 0; i < allAnswers.length; i++) {
  //   if (allAnswers[i].correct) {
  //     correctAnswers.push(allAnswers[i].id);
  //   };
  // };
  //
  //   console.log('correctAnswers', correctAnswers)


  $("#check").on("click", function(){

    for (var i = 0; i < allAnswers.length; i++) {
      if (allAnswers[i].correct) {
        totalCorrectAnswers++;
        if (checkedAnswers.indexOf(allAnswers[i].id) === -1) {
          testSuccessful = false;
          break;
        };
      };
    };

    if (totalCorrectAnswers !== checkedAnswers.length){
      testSuccessful = false;
    };

    console.log("checkedAnswers", checkedAnswers);


    if (testSuccessful) {
        alert ("TEST IS PASSED!");
    } else {
        alert ("TEST IS FAILED!");
    };
  });
});
