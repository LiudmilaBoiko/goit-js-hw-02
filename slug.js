//**делаем slug в url из названия статьи на dev to */
//**заголовок состоит только из букв и пробелов */

//*нормализуем строку
//*разбиваем по словам
//*сшиваем в строку с разелителями

const title = "Top 10 benefits of React framework";
const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);
const words = normalizedTitle.split(" ");
// console.log(words);
const slug = words.join("-");

console.log(slug);

//*chaining илт цепочки вызовов

const slug1 = title.toLowerCase().split(" ").join("-");
console.log(slug1);
