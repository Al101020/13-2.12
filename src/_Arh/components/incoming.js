import incomingData from './incomingData';

export default function incoming() { // console.log('incoming');
  // вычищаем перед обновлением
  const idIncomings = document.querySelector('#incomings'); // console.log(idIncomings);
  if (idIncomings.children.length > 0) {
    const classIncoming = document.querySelectorAll('.incoming');
    for (let i = 0; i < classIncoming.length; i += 1) {
      classIncoming[i].remove();
    }
  } // else {  //   console.log('= 0');  // };

  fetch('http://localhost:7070/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Ошибка загрузки данных: ${response.status}`);
    })
    .then((data) => {
      // Обработка полученных данных пользователя       // console.log('перед обработкой Data');
      incomingData(data);
    })
    .catch((error) => {
      console.log('Ошибка:', error);
    });
}
