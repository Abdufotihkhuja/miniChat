const fs = require("fs");
const path = require("path");
const insertMessage = ({ userId, message }) => {
  let messages = fs.readFileSync(
    path.join(process.cwd(), "src", "database", "messages.json"),
    "utf-8"
  );
  messages = messages ? JSON.parse(messages) : [];
  let id = messages.length ? messages[messages.length - 1].messageId + 1 : 1;
  let newMessage = {
    userId,
    messageId: id,
    message,
    date: new Date(),
  };
  messages.push(newMessage);
  fs.writeFileSync(
    path.join(process.cwd(), "src", "database", "messages.json"),
    JSON.stringify(messages)
  );
  return newMessage;
};
const getMessage = () => {
  let messages = fs.readFileSync(
    path.join(process.cwd(), "src", "database", "messages.json"),
    "utf-8"
  );
  let users = fs.readFileSync(
    path.join(process.cwd(), "src", "database", "users.json"),
    "utf-8"
  );
  messages = messages ? JSON.parse(messages) : [];
  users = users ? JSON.parse(users) : [];
  messages.map((mes) => {
    mes.user = users.find((user) => user.userId == mes.userId).username;
  });
  return messages;
};
module.exports = {
  insertMessage,
  getMessage,
};
