//**напиши скрипт, который заменяет регистр каждого символа в строке на противоположный */
// const string = "JavaScript";
// const letters = string.split(""); //*метод, который разбивает строку по разделителю посимвольно
// let invertedString = "";
// for (const letter of letters) {
//   console.log(letter);

//   if (letter === letter.toLowerCase()) {
//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
//   }
// }
// console.log(invertedString);

//**с применением тернарного оператора */
const string = "JavaScript";
const letters = string.split(""); //*метод, который разбивает строку по разделителю посимвольно
let invertedString = "";
for (const letter of letters) {
  console.log(letter);

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}
console.log(invertedString);
