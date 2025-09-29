const { IncomingForm } = require("formidable");
const cloudinary = require("cloudinary").v2;
const { responseReturn } = require("../../utils/response");
const sellerModel = require("../../models/sellerModel");

class sellerController {
  get_requested_sellers = async (req, res) => {
    const { page, searchQuery, perPage } = req.query;
    const skipPage = parseInt(perPage) * (parseInt(page) - 1);

    try {
      if (searchQuery) {
      } else {
        const sellers = await sellerModel
          .find({ status: "pending" })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });

        const totalSeller = await sellerModel
          .find({ status: "pending" })
          .countDocuments();
        return responseReturn(res, 200, { sellers, totalSeller });
      }
    } catch (error) {
      return responseReturn(res, 500, { error: error.message });
    }
  };

  get_seller = async (req, res) => {
    const { sellerId } = req.params;
    try {
      const seller = await sellerModel.findById(sellerId);
      return responseReturn(res, 201, { seller });
    } catch (error) {
      return responseReturn(res, 500, { error: error.message });
    }
  };

  update_seller_status = async (req, res) => {
    const { sellerId, status } = req.body;
    try {
      await sellerModel.findByIdAndUpdate(sellerId, { status });
      const seller = await sellerModel.findById(sellerId);
      return responseReturn(res, 201, {
        seller,
        message: "Seller status updated successfully",
      });
    } catch (error) {
      return responseReturn(res, 500, { error: error.message });
    }
  };
}

module.exports = new sellerController();
