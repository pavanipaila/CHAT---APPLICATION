const socket = io();

function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value;
  if (message.trim() !== "") {
    socket.emit("chat message", message);
    input.value = "";
  }
}

socket.on("chat message", function(msg) {
  const msgDiv = document.createElement("div");
  msgDiv.textContent = msg;
  const messages = document.getElementById("messages");
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;
});