 // A simple chatbot that responds with some predefined answers
 function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, how can I help you!";
    } else if (input.includes("how are you")) {
      output = "I'm doing great, thank you for asking.";
    } else if (input.includes("do you know my name")) {
      output = "Yes! Right now I am chatting with Simran Batra.";
    } else if (input.includes("who are you")) {
      output = "I'm a chatbot.I can chat with you and answer some simple questions.";
    } else if (input.includes("what is a chatbot")) {
      output = "Chatbots are conversational tools that perform routine tasks efficiently. People like them because they help them get through those tasks quickly so they can focus their attention on high-level, strategic, and engaging activities that require human capabilities that cannot be replicated by machines.";
    } else if (input.includes("independence day of india")) {
      output = "On 15 August 1947 India became independent from the British Empire following the Independence Movement led by Mahatma Gandhi and his message of nonviolent resistance.";
    } else {
      output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
  }

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });