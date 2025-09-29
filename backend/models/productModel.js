const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    sellerId: {
      type: Schema.ObjectId,
      required: true,
      ref: "user",
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    shopName: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    shopName: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

productSchema.index(
  {
    name: "text",
    category: "text",
    brand: "text",
    description: "text",
    shopName: "text",
  },
  {
    weights: {
      name: 5,
      category: 4,
      brand: 3,
      description: 2,
      shopName: 1,
    },
  }
);

module.exports = mongoose.model("product", productSchema);
