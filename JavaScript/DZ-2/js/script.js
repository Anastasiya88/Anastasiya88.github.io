var div

var test = {

  wrapper: function createWrapper(){
    div = document.createElement('div');
    div.className = "wrapper";
    div.innerHTML = "<h1>Тест по программированию</h1>";

    document.body.insertBefore(div, document.body.firstChild);
  },

  h2: function(header_element){
    var header= document.createElement('h2');
    header.innerHTML = header_element;

    div.insertBefore(header, div.h1);
  },

  form: function(){
    var form = document.createElement('form');
    form.className = "response";
    form.innerHTML = "<div><input type='checkbox' id='option'>\
    <label class= 'option' for='option'>Вариант ответа №1</label></div>";

    div.insertBefore(form, div.h1);

    var form2 = form.cloneNode(true);
    form2.querySelector('.option').innerHTML = 'Вариант ответа №2';

    form.parentNode.insertBefore(form2, form.nextSibling);

    var form3 = form.cloneNode(true);
    form3.querySelector('.option').innerHTML = 'Вариант ответа №3';

    form.parentNode.appendChild(form3);
  },

  submit: function () {
    var button = document.createElement('button');
    button.innerHTML = 'Проверить мои результаты';

    div.appendChild(button);
  },

}

test.wrapper()
test.h2('1.Вопрос №1')
test.form()
test.h2('2.Вопрос №2')
test.form()
test.h2('3.Вопрос №3')
test.form()
test.submit()
