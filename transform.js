//*напиши скрипт который обьединяет все эдементы массива в одно строковое значение
//*элементов может быть произвольное колличество
//*пусть элементы массива в строке будут разделены запятой

//* через for
const friends = ["Lusy", "Mary", "Marina", "Helen"];
// let string = "";

// for (const friend of friends) {
//   string += friend + ",";
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

//** метод массива join вызывается на массиве, он берет каждый элемент массива и сшивает в одну строку, в скобках передается разделитель */

const string = friends.join(",");
console.log(string);
