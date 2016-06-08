$(function(){



  var data = {
  name : "Каширина Анастасия Никитична",
  photo : {
    src : "img/foto-1.jpg",
    height : "150px",
    alt : "фото для анкеты"
  },
  profession : "Начальник отдела на гос. предприятии (в декрете)",
  list : "Хочу учить фронтенд, потому что:",
  motives: ['Предприятие пришло в упадок и отдел ликвидирован',
            'Есть возможность работать удалённo',
            'Люблю видеть результат своей работы',
            'Нравится работать с кодом'
         ],
  phone: "Мой контактный телефон",
  number: "+38668284909",
  vk: "Мой профиль вконтакте",
  vk_link: '<a href="https://m.vk.com/id19108584">vk.com</a>',
  feedback: "Мой фидбек:",
  feedback_text: "Могу построить дом с забором, ещё и землю под него отвести"
};

  var html = $("#profile").html();
  var content = tmpl(html,data);

  $('body').append(content);

//lodash
  var content = _.template(html)(data);

  $('body').append(content);

});
