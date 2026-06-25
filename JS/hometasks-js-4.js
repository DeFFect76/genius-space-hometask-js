// Домашнє завдання
// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
const studentInformation = {
  Info: function () {
    console.log(
      `Name: ${this.name}, Specialty: ${this.specialty}, Average Grade: ${this.averageGrade}, Missed Classes: ${this.missedClasses}`,
    );
  },
};

const student1 = {
  name: 'John',
  specialty: 'Computer Science',
  averageGrade: 3.5,
  missedClasses: 2,
};

const student2 = {
  name: 'Alice',
  specialty: 'Mathematics',
  averageGrade: 4.0,
  missedClasses: 1,
};

const student3 = {
  name: 'Bob',
  specialty: 'Physics',
  averageGrade: 3.8,
  missedClasses: 3,
};

studentInformation.Info.call(student1);
studentInformation.Info.apply(student2);
studentInformation.Info.bind(student3)();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

const WhatItIs = {
  Info() {
    console.log(`It is`, this.definition);
  },
};
const html = {
  definition:
    'HTML (Hypertext Markup Language) is the standard markup language used to create web pages and applications. It provides the structure and content of a webpage, allowing developers to define elements such as headings, paragraphs, images, links, and more.',
};
const css = {
  definition:
    'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and appearance of a document written in HTML or XML. It allows developers to control the layout, colors, fonts, and other visual aspects of web pages, enabling them to create visually appealing and responsive designs.',
};
document
  .querySelector('#htmlButton')
  .addEventListener('click', WhatItIs.Info.bind(html));
document
  .querySelector('#cssButton')
  .addEventListener('click', WhatItIs.Info.bind(css));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89, 3,4

const magazine = {
  calculatePrice(product, pricePerKg, quantity) {
    console.log(
      'Product: ' +
        this.product +
        ', Price: ' +
        this.pricePerKg +
        ', Quantity: ' +
        this.quantity,
    );
  },
};
const bannana = {
  product: 'banana',
  pricePerKg: 30,
  quantity: 4.5,
};
const cherry = {
  product: 'cherry',
  pricePerKg: 58,
  quantity: 1.3,
};
const orange = {
  product: 'orange',
  pricePerKg: 89,
  quantity: 3.4,
};

magazine.calculatePrice.bind(bannana)();
magazine.calculatePrice.bind(cherry)();
magazine.calculatePrice.bind(orange)();
