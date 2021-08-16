const router = require("express").Router();
const { POST, GET, authGET } = require("./controller.js");
router.route("/auth").post(POST).get(authGET);
router.route("/users").get(GET);
module.exports = router;
