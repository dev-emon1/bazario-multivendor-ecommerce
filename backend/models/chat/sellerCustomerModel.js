const mongoose = require("mongoose");
const { Schema } = mongoose;

const sellerCustomerSchema = new Schema(
  {
    myId: {
      type: String,
      required: true,
    },
    myCustomers: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("seller_customers", sellerCustomerSchema);
