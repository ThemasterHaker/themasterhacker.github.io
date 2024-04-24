// Function to display chat messages from local storage
function displayMessages() {
    const chatMessages = document.getElementById('chat-messages');
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    chatMessages.innerHTML = '';

    messages.forEach(message => {
        const p = document.createElement('p');
        p.textContent = `${message.sender}: ${message.text}`;
        chatMessages.appendChild(p);
    });

    // Scroll to bottom of chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle form submission (sending messages)
function sendMessage(event) {
    event.preventDefault();

    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const sender = 'User'; // Change this to the actual sender (e.g., username)
        const message = { sender, text: messageText };

        // Retrieve existing messages from local storage
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];

        // Add new message to the array
        messages.push(message);

        // Save updated messages to local storage
        localStorage.setItem('chatMessages', JSON.stringify(messages));

        // Clear input field
        messageInput.value = '';

        // Display updated messages
        displayMessages();
    }
}

// Call the function to display messages when the page loads
displayMessages();

// Add event listener to the chat form for message submission
document.getElementById('chat-form').addEventListener('submit', sendMessage);
