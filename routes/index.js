const router = require('express').Router();


const authRoutes = require("./auth");
const userRoutes = require("./user");


router.use('/api/', authRoutes);
router.use('/api/user', userRoutes);

module.exports = router;