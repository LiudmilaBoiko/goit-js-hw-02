//**работаем с коллекцией карточек в trello */
//* метод splice
//*удалить
//*добавить
//*обновить

const cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];
console.table(cards);
//*удаление по индексу, метод index of - позволяет найти индекс элемента в массиве, возвращает индекс элемента в массиве или -1 если такого элемента нет

const cardToRemove = "Card-3";
const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

//*добавление по индексу* */

const cardToInsert = "Card 6";
// cards.splice(index, 0, cardToInsert);
// console.table(cards);

//*обновление по индексу

cards.splice(index, 1, cardToInsert);
console.table(cards);
