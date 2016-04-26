var div

var test = {

  wrapper: function createWrapper(){
    div = document.createElement('div');
    div.className = "wrapper";
    div.innerHTML = "<h1>Тест по программированию</h1>";

    document.body.insertBefore(div, document.body.firstChild);
  },

  form: function(){
    var form = document.createElement('form');
    form.className = "response";

    div.appendChild(form);
  },

  h2: function(header_element){
    var header = document.createElement('h2');
    header.innerHTML = header_element;

    var response = document.querySelector('.response')
    response.appendChild(header);
  },

  input: function(label_element) {
    var label = document.createElement('label');
    label.innerHTML = '<input type="checkbox">' + label_element;

    var response = document.querySelector('.response')
    response.insertBefore(label, response.header);
  },

  submit: function () {
    var button = document.createElement('button');
    button.innerHTML = 'Проверить мои результаты';

    var response = document.querySelector('.response')
    response.appendChild(button);
  },

}

test.wrapper()
test.form()
test.h2('1.Вопрос №1')
test.input('Вариант ответа №1')
test.input('Вариант ответа №2')
test.input('Вариант ответа №3')
test.h2('2.Вопрос №2')
test.input('Вариант ответа №1')
test.input('Вариант ответа №2')
test.input('Вариант ответа №3')
test.h2('3.Вопрос №3')
test.input('Вариант ответа №1')
test.input('Вариант ответа №2')
test.input('Вариант ответа №3')
test.submit()
