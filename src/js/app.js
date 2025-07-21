// // вставка Incoming непрочитанных входящих

// import { Observable } from 'rxjs';

// import '../components/windowIncoming.css';
// import functionIncoming from '../components/incoming';

// const body = document.querySelector('body');
// const titleDz = body.querySelector('h4');

// const windowIncoming = document.createElement('div');
// windowIncoming.id = 'windowIncoming';
// titleDz.insertAdjacentElement('afterend', windowIncoming);
// const windowInc = document.querySelector('#windowIncoming');

// const titleWindowIncoming = document.createElement('div');
// titleWindowIncoming.textContent = 'Incoming';
// titleWindowIncoming.id = 'titleWindowIncoming';
// windowInc.append(titleWindowIncoming);

// const incomings = document.createElement('div');
// incomings.id = 'incomings';
// windowInc.append(incomings);

// const stream$ = new Observable((observer) => {
//   let fetchData = null;
//   setInterval(async () => {
//     fetch('http://localhost:7070/messages', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error(`Ошибка загрузки данных: ${response.status}`);
//       })
//       .then((value) => {
//         fetchData = value;
//       })
//       .catch((error) => {
//         console.log('Ошибка:', error);
//       });
//     observer.next(fetchData);
//   }, 5000);
// });

// stream$.subscribe((data) => { // console.log(data);
//   functionIncoming(data);
// });

console.log('12. Лекции: WebWorkers, ServiceWorkers.');
// -------------------------------------------------------
const iframeWindow = document.querySelector('.iframe').contentWindow.window;
console.log(iframeWindow);
// iframeWindow.postMessage('test message', 'http://localhost:8081')
