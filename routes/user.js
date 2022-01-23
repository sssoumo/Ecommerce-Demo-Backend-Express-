const { userUpdate } = require("../app/controllers/UserController");
const { verifyToken, verifyTokenAuthorization } = require("../app/middleware/verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAuthorization, userUpdate)
module.exports = router;
