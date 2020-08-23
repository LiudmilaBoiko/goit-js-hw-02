//*Функции, обьявление функций
const add = function (x, y) /*параметры*/ {
  console.log(x);
  console.log(y);

  //   const result = x + y;
  //   console.log("x+y", result);
  console.log("Выполняется функция add");

  return x + y;
};
const r1 = add(2, 3); /*аргументы */
console.log("r1: ", r1);
console.log(add(25, 30));

//*иногда бывает нужно  напимать функцию для массива когда ты не знаешь точно какое количество аргументов в нем будет.
//*для перебора такого массива используем arguments
//*Array.from(arguments) используется для преобразования аргументов в массив

const fn = function () {
  console.log(arguments);

  const args = Array.from(arguments);

  console.log(args);
};

//* более современный метод в параметр функции записать (...args), который соберет весь массив, который будет передан

const fn = function (...args) {
  console.log(args);
};

//*если нам нужно вывести только несколько первых элементов, а в массив записать последние:
const fn = function (a, b, c, ...args) {
  console.log($(a), $(b), $(c));
  console.log(args);
};

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);
