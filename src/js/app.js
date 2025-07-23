const worker = new Worker('../src/worker.js');// этот вариант даже на сайте сборку прошёл.

const slowButton = document.querySelector('.slow-button');// console.log(slowButton);
const consoleButton = document.querySelector('.console-button');

slowButton.addEventListener('click', () => {
  console.log('Кнопка-тормоза');
  worker.postMessage('test message');
});

consoleButton.addEventListener('click', () => {
  console.log('Консоль-кнопка');
});

worker.addEventListener('message', (event) => {
  console.log(event.data);
});

const fileInput = document.querySelector('.file-input');
console.log(fileInput);
