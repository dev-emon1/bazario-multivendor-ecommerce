const { admin_login } = require("../controllers/authController");

const router = require("express").Router();

router.post("/admin-login", admin_login);

module.exports = router;
