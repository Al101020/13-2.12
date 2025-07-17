export default function incomingData(data) {
  const divMessages = document.querySelector('#incomings'); // console.log(data);

  for (let i = 0; i < data.length; i += 1) { // console.log(data[i]);
    const message = document.createElement('div');
    message.classList.add('incoming');

    const messageFrom = document.createElement('div');
    messageFrom.classList.add('messageFrom');
    messageFrom.textContent = data[i].from;
    message.append(messageFrom);

    const messageSubject = document.createElement('div');
    messageSubject.classList.add('messageSubject');

    if (data[i].subject.length <= 15) {
      messageSubject.textContent = data[i].subject;
    } else {
      const str = data[i].subject.substring(0, 15);
      messageSubject.textContent = `${str}...`;// console.log(data[i].subject.length);
    }

    message.append(messageSubject);

    const messageTime = document.createElement('div');
    messageTime.classList.add('messageTime');
    messageTime.textContent = data[i].time; // messageTime.textContent = timeDate();
    message.append(messageTime);

    divMessages.prepend(message);
  }
}
