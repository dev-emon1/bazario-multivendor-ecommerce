const {
  add_category,
  get_category,
} = require("../../controllers/dashboard/categoryController");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/add-category", authMiddleware, add_category);
router.get("/get-category", authMiddleware, get_category);

module.exports = router;
