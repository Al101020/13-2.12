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

// манипуляции с файлами

const fileInput = document.querySelector('.file-input');// console.log(fileInput);

let fileName;

fileInput.addEventListener('change', (event) => {
  const { target } = event;
  const userFile = target.files && target.files[0];
  fileName = userFile.name;
  worker.postMessage(userFile);
}); // 'change' или 'input'

worker.addEventListener('message', (event) => {
  const blob = event.data;

  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');

  link.href = url;
  link.rel = 'noopener'; // чтобы по этой ссылке не ходить, а скачать
  link.download = `${fileName}.zip`; // к файлу приклеиваем расширение(наверно второе)

  link.click();

  const textPreview = document.querySelector('.text-preview');
  textPreview.textContent = event.data;
});
