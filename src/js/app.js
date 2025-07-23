// const worker = new Worker('http://localhost:8080/src/worker.js');// наконецто сработал.
// const worker = new Worker('./src/worker.js');// или это
const worker = new Worker('../src/worker.js');

const slowButton = document.querySelector('.slow-button');// console.log(slowButton);
const consoleButton = document.querySelector('.console-button');// console.log(consoleButton);

// if (window.Worker) {   console.log('конструктор Worker в Window есть')//   console.log(worker);}

slowButton.addEventListener('click', () => {
  console.log('Кнопка-тормоза');

  worker.postMessage('test message');
});

consoleButton.addEventListener('click', () => {
  console.log('Консоль-кнопка');
});
