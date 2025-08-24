const {
  admin_login,
  get_users_profile,
  seller_register,
  seller_login,
} = require("../controllers/authController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = require("express").Router();

// Admin routes
router.post("/admin-login", admin_login);

// Seller routes
router.post("/seller-register", seller_register);
router.post("/seller-login", seller_login);

// User profile route
router.get("/get-user", authMiddleware, get_users_profile);

module.exports = router;
