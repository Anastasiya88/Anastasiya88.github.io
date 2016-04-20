function pow(x, n) {
  if (n != 1) {
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

var x = prompt("число?", '');
var n = prompt("степень?", '');

console.log( pow(x, n) );

alert( pow(x, n) );

var users = [];

for (var i = 0; i < 5; i++) {
  var name = prompt("Введите имя", '')
  users.push(name);
}

var username = prompt("Имя пользователя?", '');

var rightUserName = false;

for (var i = 0; i <= users.length; i++) {
  if (users[i] == username) {
    rightUserName = true;
    alert( username + ', Вы успешно вошли!');
    break;
  }
}

if (!rightUserName) {
  alert( 'Ошибка! Параметры пользователя отсутствуют!');
}
