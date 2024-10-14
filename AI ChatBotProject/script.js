const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".chat-body");
const sendMessageButton = document.querySelector("#sent-message");
const emojiPickerButton = document.querySelector("#emoji-picker");
const fileInput = document.querySelector("#file-input");
const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
const fileCancelButton = document.querySelector("#file-cancel");
const toggleChatButton = document.querySelector("#toggle-chat");
const chatbotPopup = document.querySelector(".chatbot-popup");

const userData = {
  message: null,
  file: {
    data: null,
    mime_type: null,
  },
};

const API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with your Gemini API key
const API_URL = "YOUR_GEMINI_API_URL"; // Replace with your Gemini API URL

const generateResponse = async (incomingMessageDiv) => {
  const messageElement = incomingMessageDiv.querySelector(".message-text");
  const requestBody = {
    message: userData.message,
    file: userData.file.data ? { data: userData.file.data, mime_type: userData.file.mime_type } : null,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });
    
    if (!response.ok) {
      throw new Error("Error with the API response");
    }
    
    const data = await response.json();
    const apiResponseText = data.response; 
    messageElement.innerText = apiResponseText;
  } catch (error) {
    console.error(error);
    messageElement.innerText = "An error occurred. Please try again.";
    messageElement.style.color = "#ff0000";
  } finally {
    userData.file = {}; 
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }
};

function handleSendMessage(event) {
  if (event.type === "click" || (event.type === "keydown" && event.key === "Enter")) {
    event.preventDefault(); 

    const message = messageInput.value.trim(); 
    if (message !== "" || userData.file.data) {
      if (userData.file.data) {
        appendImage(userData.file.data);
      } else {
        appendMessage(message, "user-message");
      }

      const thinkingDots = `<div class="message-text dots-animation">...</div>`;
      const incomingMessageDiv = appendMessage(thinkingDots, "reply-message");

      userData.message = message; 
      messageInput.value = ""; 

      generateResponse(incomingMessageDiv);
    }
  }
}

function appendMessage(message, className) {
  const messageElement = document.createElement("div");
  messageElement.className = "message " + className;

  const messageText = document.createElement("div");
  messageText.className = "message-text";
  messageText.innerHTML = message;

  messageElement.appendChild(messageText);
  chatBody.appendChild(messageElement);
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

  return messageElement; 
}

function appendImage(base64Image) {
  const messageElement = document.createElement("div");
  messageElement.className = "message user-message";

  const image = document.createElement("img");
  image.src = `data:image/png;base64,${base64Image}`; 
  image.style.maxWidth = "100%"; 
  image.style.borderRadius = "8px"; 

  messageElement.appendChild(image);
  chatBody.appendChild(messageElement);
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
}

sendMessageButton.addEventListener("click", handleSendMessage);

messageInput.addEventListener("keydown", handleSendMessage);

fileUploadWrapper.addEventListener("click", () => {
  fileInput.click(); 
});

fileCancelButton.addEventListener("click", () => {
  userData.file.data = null; 
  fileUploadWrapper.classList.remove("file-uploaded");
  fileInput.value = ""; 
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64String = e.target.result.split(",")[1];
      userData.file = {
        data: base64String,
        mime_type: file.type,
      };
      fileUploadWrapper.classList.add("file-uploaded");
    };
    reader.readAsDataURL(file);
  }
});

const picker = new EmojiMart.Picker({
  theme: "light",
  skinTonePosition: "none",
  previewPosition: "none",
  onEmojiSelect: (emoji) => {
    messageInput.value += emoji.native; 
    messageInput.focus(); 
  },
});

emojiPickerButton.appendChild(picker);

emojiPickerButton.addEventListener("click", () => {
  const pickerContainer = document.querySelector(".emoji-mart");
  if (pickerContainer) {
    pickerContainer.style.display = pickerContainer.style.display === "none" ? "block" : "none";
  }
});

document.addEventListener("click", (event) => {
  const pickerContainer = document.querySelector(".emoji-mart");
  if (pickerContainer && !pickerContainer.contains(event.target) && !emojiPickerButton.contains(event.target)) {
    pickerContainer.style.display = "none";
  }
});

toggleChatButton.addEventListener("click", () => {
  const isVisible = chatbotPopup.style.display === "block";
  chatbotPopup.style.display = isVisible ? "none" : "block"; 
});
