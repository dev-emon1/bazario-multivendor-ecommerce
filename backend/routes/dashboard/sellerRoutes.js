const {
  get_requested_sellers,
  get_seller,
  update_seller_status,
} = require("../../controllers/dashboard/sellerController");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/get-requested-sellers", authMiddleware, get_requested_sellers);
router.get("/get-seller/:sellerId", authMiddleware, get_seller);

router.post("/update-seller-status", authMiddleware, update_seller_status);

module.exports = router;
