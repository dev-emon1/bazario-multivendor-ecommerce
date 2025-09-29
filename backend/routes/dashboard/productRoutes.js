const {
  add_product,
  get_products,
  get_editable_product,
  update_product,
  update_product_images,
} = require("../../controllers/dashboard/productController");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/add-product", authMiddleware, add_product);
router.get("/get-products", authMiddleware, get_products);
router.get(
  "/get-editable-product/:productId",
  authMiddleware,
  get_editable_product
);
router.post("/update-product", authMiddleware, update_product);
router.post("/update-product-images", authMiddleware, update_product_images);

module.exports = router;
