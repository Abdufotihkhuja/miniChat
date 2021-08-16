const { insertAuth, getUsers, renderAuth } = require("./model.js");
const POST = (req, res) => {
  console.log(req.body);
  let data = insertAuth(req.body);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400).json({ message: "Error" });
  }
};
const GET = (req, res) => {
  let users = getUsers();
  res.status(200).json(users);
};
const authGET = (req, res) => {
  res.sendFile(renderAuth("auth.html"));
};

module.exports = {
  POST,
  authGET,
  GET,
};
