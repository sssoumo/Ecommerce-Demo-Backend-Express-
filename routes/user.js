const { userUpdate, userDelete } = require("../app/controllers/UserController");
const { verifyTokenAuthorization } = require("../app/middleware/verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAuthorization, userUpdate);
router.delete("/:id", verifyTokenAuthorization, userDelete);

module.exports = router;
