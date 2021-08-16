let userId = window.localStorage.getItem("userId");
let username = window.localStorage.getItem("username");

if (!userId && !username) {
  window.location = "/auth";
}

async function fetchUsers() {
  let response = await fetch("/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let users = await response.json();
  for (let i in users) {
    let li = document.createElement("li");
    let avatar = document.createElement("img");
    let div = document.createElement("div");
    let h3 = document.createElement("div");

    li.classList.add("clearfix");
    div.classList.add("about");
    h3.classList.add("name");
    avatar.setAttribute(
      "src",
      `https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg`
    );
    h3.textContent = users[i].username;
    div.appendChild(h3);
    li.appendChild(avatar);
    li.appendChild(div);
    list.appendChild(li);
  }
}
fetchUsers();

async function renderMessages() {
  let response = await fetch("/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let messages = await response.json();
  messageList.innerHTML = null;
  for (let message of messages) {
    let li = document.createElement("li");
    let messageTop = document.createElement("div");
    let time = document.createElement("span");
    let usernameText = document.createElement("span");
    let messageBottom = document.createElement("div");

    li.classList.add("clearfix");
    messageTop.classList.add("message-data");
    messageBottom.classList.add("message");
    if (message.userId == userId) {
      messageBottom.classList.add("other-message");
      messageBottom.classList.add("float-right");
      messageTop.classList.add("align-right");
    } else {
      messageBottom.classList.add("my-message");
    }
    time.classList.add("message-data-time");
    usernameText.classList.add("message-data-name");

    time.textContent = message.date;
    usernameText.textContent = message.user;
    messageBottom.textContent = message.message;

    messageTop.append(time);
    messageTop.append(usernameText);
    li.append(messageTop);
    li.append(messageBottom);
    messageList.appendChild(li);
  }
}
renderMessages();

sendButton.onclick = async () => {
  if (messageInput.value != "") {
    await fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        message: messageInput.value,
      }),
    });
    renderMessages();
    messageInput.value = "";
  }
};
