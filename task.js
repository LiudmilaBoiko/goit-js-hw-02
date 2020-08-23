// //посчитать общую сумму покупок в корзине
// const cart = [54, 28, 105, 70, 92, 17, 120];
// //2. сделать переменную total  до цикла
// let total = 0;
// //1. перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   // 3. каждый элемент приплюсовать к total
//   total += cart[i];
// }

// console.log("Total", total);

// // 3. каждый элемент приплюсовать к total

// //* чтобы сократить количество кода можно использовать for...of
// // for (const value of cart){
// //total += IDBCursorWithValue;
// //}

// //* добавить налог
// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.2);
//   console.log(cart[i]);
//   total += cart[i];
// }
// console.log("Total", total);

//*напиши скрипт, который подсчитывает сумму всех четных чисел в массиве
// const numbers = [1, 5, 84, 52, 36, 99, 13, 17];

// //1 переменная тотал
// let total = 0;
// //2 перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//   //3 на каждой итерации проверить элемент на четнность
//   if (numbers[i] % 2 === 0) {
//     console.log("Четное!!!");
//     //4 если четный плюсуем к тотал
//     total += numbers[i];
//   }
// }
// console.log("Total", total);

//* for...of decision
//

//**скрипт поиска логина */
const logins = ["qwaszx", "erdfcv", "tyghbn", "qwerty"];
const loginToFind = "qwerty";
// let message = "Пользователь $(loginToFind) не найден.";

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   if (login === loginToFind) {
//     message = "Пользователь $(loginToFind) найден.";
//     break;
//   }
// }
// console.log(message);

// for...of descision
// for (const login of logins) {
//   if (login === loginToFind) {
//     message = "Пользователь $(loginToFind) найден.";
//     break;
//   }
// }
// console.log(message);

//решение через includes и тернарный оператор

const message = logins.includes(loginToFind)
  ? "Пользователь $(loginToFind) найден."
  : "Пользователь $(loginToFind) найден.";

console.log(message);
