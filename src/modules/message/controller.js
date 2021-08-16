const { insertMessage, getMessage } = require("./model.js");
const POST = (req, res) => {
  let data = insertMessage(req.body);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400).json({ message: "Error" });
  }
};
const GET = (req, res) => {
  let messages = getMessage();
  res.status(200).json(messages);
};

module.exports = {
  POST,
  GET,
};
