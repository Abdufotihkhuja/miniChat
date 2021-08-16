const PORT = process.env.PORT || 7000;
const host = require("./lib/getIp.js")({ internal: false });
module.exports = {
  PORT,
  host,
};
