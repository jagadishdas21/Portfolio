const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
});
   document.getElementById('sendEmailLink').addEventListener('click', function(event) {
        // Prevent the default anchor behavior
        event.preventDefault();

        // Define email parameters
        const email = 'jagadishdas.nitrkl@gmail.com'; // Your email
        const subject = 'Inquiry'; // Email subject
        const body = 'Hello Mr. Jagadish Das'; // Email body

        // Check if the user is on a mobile device
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);

        // Construct the appropriate email link
        let mailtoLink;
        if (isMobile) {
            // For mobile devices, use mailto:
            mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        } else {
            // For desktop devices, use Gmail link
            mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }

        // Open the email link
        window.open(mailtoLink, '_blank');
    });


console.log("Script loaded");

const qaPairs = [
    {
        question: "Tell me about yourself?",
        answer: "I'm an AI assistant of Mr. Jagadish Das!"
    },
    {
        question: "Can we connect?",
        answer: "Yes, of course!"
    },
    {
        question: "How can I get help?",
        answer: "You can send us an Email!"
    },
    {
        question: "What projects can you help with?",
        answer: "I can assist with AI in Healthcare."
    }
];

function searchQuestion() {
    const input = document.getElementById("search-input").value.toLowerCase().trim();
    const chatBox = document.getElementById("chat-box");

    if (input === '') return; // Prevent empty submissions

    // Create a new div for the user input
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-msg');  
    userMessage.innerHTML = `<p>${input}</p>`;
    chatBox.appendChild(userMessage);

    // Check for a match in qaPairs
    const match = qaPairs.find(pair => pair.question.toLowerCase().includes(input));
    console.log("User input:", input);
    console.log("Match found:", match);

    // Create a new div for the bot's response
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-msg');

    if (match) {
        botMessage.innerHTML = `<p>${match.answer}</p>`;
    } else {
        botMessage.innerHTML = `<p>Sorry, I couldn't find an answer to that.</p>`;
    }

    console.log("Bot message:", botMessage.innerHTML);

    // Append the bot's response to the chat
    chatBox.appendChild(botMessage);

    // Scroll the chatbox to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field after submission
    document.getElementById("search-input").value = '';

    // Reset the height of the input box
    document.getElementById("search-input").style.height = '40px';
}

function adjustInputHeight() {
    const input = document.getElementById("search-input");
    input.style.height = '40px';  // Reset to default height
    input.style.height = input.scrollHeight + 'px';  // Adjust based on content
}
