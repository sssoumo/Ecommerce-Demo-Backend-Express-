const {
  userUpdate,
  userDelete,
  userGet,
  userGetAll,
} = require("../app/controllers/UserController");
const {
  verifyTokenAuthorization,
  verifyTokenAdmin,
} = require("../app/middleware/verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAuthorization, userUpdate);
router.delete("/:id", verifyTokenAuthorization, userDelete);
router.get("/:id", verifyTokenAuthorization, userGet);
router.get("/", verifyTokenAdmin, userGetAll);

module.exports = router;
