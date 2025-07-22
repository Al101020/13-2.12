const parentWindow = window.top;//  console.log(parentWindow);
 const messages = document.querySelector('.messages');//  console.log(messages);
//  messages.textContent = '!!!!';
let number = 0;
 window.addEventListener('message', (event) => {
    const message = event.data;
    messages.textContent += message + '\n';
    // parentWindow.postMessage(Math.round(Math.random() * 1000), 'http://localhost:8080');
    
    parentWindow.postMessage('Hello! - ' + number, 'http://localhost:8080');
    number += 1;
 });
