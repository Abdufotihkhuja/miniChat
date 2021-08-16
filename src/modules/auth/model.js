const fs = require("fs");
const path = require("path");

const insertAuth = ({ username, password }) => {
  let users = fs.readFileSync(
    path.join(process.cwd(), "src", "database", "users.json"),
    "utf-8"
  );
  users = users ? JSON.parse(users) : [];
  let user = users.find((u) => u.username == username);
  if (user) {
    return user;
  } else {
    let id = users.length ? users[users.length - 1].userId + 1 : 1;
    let newUser = {
      userId: id,
      username,
      password,
    };
    users.push(newUser);
    fs.writeFileSync(
      path.join(process.cwd(), "src", "database", "users.json"),
      JSON.stringify(users)
    );
    return newUser;
  }
};

const getUsers = () => {
  let users = fs.readFileSync(
    path.join(process.cwd(), "src", "database", "users.json"),
    "utf-8"
  );
  users = users ? JSON.parse(users) : [];
  return users;
};
const renderAuth = (html) => {
  return path.join(process.cwd(), "src", "views", html);
};
module.exports = {
  insertAuth,
  getUsers,
  renderAuth,
};
