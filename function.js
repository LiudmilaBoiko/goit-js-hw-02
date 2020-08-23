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
