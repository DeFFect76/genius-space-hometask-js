// Домашнє завдання
// Створити телефонну книгу:
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class abonent {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
  set setNumber(name) {
    this.name = name;
  }
  set setNumber(number) {
    this.number = number;
  }
  get getInformation() {
    return `Name: ${this.name}, Number: ${this.number}`;
  }
}
const user1 = new abonent('John', '123-456-7890');
const user2 = new abonent('Alice', '987-654-3210');
const user3 = new abonent('Bob', '555-123-4567');

console.log(user1.getInformation);
console.log(user2.getInformation);
console.log(user3.getInformation);
