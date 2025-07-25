// console.log('Worker started');

// // self.addEventListener('message', (event) => { // lint - ошибку выдавал
// this.addEventListener('message', (event) => {
//   console.log(`worker recieved a message - работник получил сообщение - ${event.data}`);

//   console.log('start - долгих расчётов');
//   let z;
//   for (let i = 0; i < 10000000000; i += 1) {
//     z = i * 2;
//   }
//   console.log(z);
//   // this.postMessage(z); // return z;
//   self.postMessage(z);// а здесь работает и self, и this.
// });

// --- Работает ---

// // теперь манипуляции с файлами
// this.addEventListener('message', (event) => {
//   console.log(`worker recieved a message - работник получил сообщение`);

//   console.log(event.data);
// });

// ---
this.addEventListener('message', (event) => {
  console.log('worker recieved a message - работник получил сообщение');

  console.log(event.data);

  // let extension = event.data.name; // из name нужно достать расширение
  const extension = (event.data.name).slice((event.data.name).lastIndexOf('.') + 1); // расширение
  console.log(extension);

  const reader = new FileReader();

  reader.addEventListener('load', (e) => {
    const content = e.target.result;

    // self.postMessage(content);
    this.postMessage(content);
  });

  if (extension === 'png') {
    reader.readAsDataURL(event.data);
  } else if (extension === 'txt') {
    reader.readAsText(event.data);
  } else {
    console.log('не знаю что за разрешение');
  }
  // reader.readAsDataURL(event.data);
  // reader.readAsText(event.data);
});
