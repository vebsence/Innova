document.addEventListener('DOMContentLoaded', () => {
    // This function will handle the display of animated messages
    const messages = [
        "Welcome to Innova!",
        "Your one-stop shop for IT hardware!",
        "Check out our latest products!",
        "Great deals on all items!",
    ];

    let messageIndex = 0;

    const messageElement = document.getElementById('animated-message');

    function updateMessages() {
        messageElement.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }

    setInterval(updateMessages, 5000);

    // Optionally, you can set the username dynamically
    const usernameElement = document.getElementById('username');
    usernameElement.textContent = 'JohnDoe'; // Example username
});
