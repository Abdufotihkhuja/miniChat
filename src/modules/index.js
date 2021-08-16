const homeRouter = require("./home/index.js");
const authRouter = require("./auth/index.js");
const messageRouter = require("./message/index.js");
module.exports = [homeRouter, authRouter, messageRouter];
