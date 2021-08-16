const router = require("express").Router();
const { POST, GET } = require("./controller.js");
router.route("/messages").post(POST).get(GET);

module.exports = router;
