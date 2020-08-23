// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function findLongestWord(string = "") {
  // Write code under this line
  const array = string.split(" ");
  let maxLengthWord = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maxLengthWord.length) maxLengthWord = array[i];
  }
  return maxLengthWord;
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
