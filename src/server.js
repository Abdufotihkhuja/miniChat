const express = require("express");
const path = require("path");
const { PORT, host } = require("./config.js");
const modules = require("./modules/index.js");

const app = express();
//  MIDDLEWARES
app.use(express.static(path.join(process.cwd(), "src", "public")));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//  MODULES
app.use(modules);

app.listen(PORT, () => {
  console.log(`Server working at http://${host}:${PORT}`);
});
