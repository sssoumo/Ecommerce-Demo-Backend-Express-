const { register, login } = require("../app/controllers/AuthController");
const router = require("express").Router();

//Register
router.post("/register", register);
router.post("/login", login);

module.exports = router;
