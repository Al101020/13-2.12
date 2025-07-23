console.log('12. Лекции: WebWorkers, ServiceWorkers.');
// -------------------------------------------------------
// или код js в app.js или в index.html(там заремирован)
const iframe = document.querySelector('.iframe');
const iframeWindow = iframe.contentWindow.window;
const messages = document.querySelector('.messages');

const sendMessage = (message) => {
  iframeWindow.postMessage(message, 'http://localhost:8081');
};

iframe.addEventListener('load', () => {
  sendMessage('start message');

  window.addEventListener('message', (event) => {
    messages.textContent += `${event.data}\n`;

    setTimeout(() => {
      sendMessage(Math.round(Math.random() * 1000));
    }, 5000);
  });
});
