const socket = io(location.host);

const story = document.getElementById('story');
const form = document.getElementById('input-form');
const messageInput = document.getElementById('input-text');
const activeNotice = document.getElementById('active-notice');
const activeTypers = document.getElementById('active-authors');

let isTyping = false;

function addMessage(message) {
  const messageElement = document.createElement('span');

  messageElement.classList.add('story__message');
  messageElement.textContent = message.trim() + ' ';
  messageElement.tabIndex = 1;

  story.appendChild(messageElement);
}

function formSubmitHandler(event) {
  event.preventDefault();
  debugger;
  if (messageInput.value.length > 0) {
    socket.emit('add message', {message: messageInput.value});
    // socket.emit('stop typing');
    // isTyping = false;
    addMessage(messageInput.value);
    messageInput.value = '';
  }
}

function newMessageHandler(data) {
  addMessage(data.message);
}

function updateTypingNotice(numberOfActive) {
  if (numberOfActive > 0) {
    activeNotice.classList.add('typing-notice__shown');
  } else {
    activeNotice.classList.remove('typing-notice__shown');
  }

  activeTypers.textContent = numberOfActive;
}

function inputChangeHandler(event) {
  const text = event.target.value;

  if (text.length > 0) {
    if (!isTyping) {
      socket.emit('start typing');
    }
    isTyping = true;
  } else {
    socket.emit('stop typing');
    isTyping = false;
  }
}

function init() {
  // messageInput.addEventListener('keyup', inputChangeHandler);
  form.addEventListener('submit', formSubmitHandler);

  socket.on('new message', newMessageHandler);
  socket.on('other typing', updateTypingNotice);
}

init();