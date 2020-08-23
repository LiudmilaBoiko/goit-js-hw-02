//*напиши скрипт поиска самого маленького числа в массиве
//* при условии что числа уникальные (не повторяются)
//*

const numbers = [5, 48, 65, 25, 14, 9, 20, 58];
let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log(smallestNumber);
