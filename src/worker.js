console.log('Worker started');

// self.addEventListener('message', (event) => { // lint - ошибку выдавал
this.addEventListener('message', (event) => {
  console.log(`worker recieved a message - работник получил сообщение - ${event.data}`);

  console.log('start - долгих расчётов');
  let z;
  for (let i = 0; i < 10000000000; i += 1) {
    z = i * 2;
  }
  console.log(z);
  return z;
});
