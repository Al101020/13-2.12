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

// worker.addEventListener('message', (event) => { // переделываем ниже
//   console.log(event.data);
// });

// манипуляции с файлами
let file = null;
const fileInput = document.querySelector('.file-input');// console.log(fileInput);
fileInput.addEventListener('change', (event) => {
  const { target } = event;
  const userFile = target.files && target.files[0];
  console.log(userFile);
  file = userFile;
  worker.postMessage(userFile);
}); // 'change' или 'input'

const imagePreview = document.querySelector('.img-preview');
// console.log(imagePreview);

// worker.addEventListener('message', (event) => {
//   imagePreview.src = event.data;
// });

const textPreview = document.querySelector('.text-preview');

worker.addEventListener('message', (event) => {
  // let extension = event.data.name; // из name нужно достать расширение
  const extension = (file.name).slice((file.name).lastIndexOf('.') + 1); // расширение
  console.log(extension);

  if (extension === 'png') {
    imagePreview.src = event.data;
  } else if (extension === 'txt') {
    textPreview.textContent = event.data;
  } else {
    console.log('не знаю что за разрешение');
  }
  console.log(file);

  // console.log(event);
  // textPreview.textContent = event.data;
});
