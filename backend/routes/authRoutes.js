const {
  admin_login,
  get_users_profile,
} = require("../controllers/authController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/admin-login", admin_login);
router.get("/get-user", authMiddleware, get_users_profile);

module.exports = router;
