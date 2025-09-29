const { IncomingForm } = require("formidable");
const cloudinary = require("cloudinary").v2;
const adminModel = require("../models/adminModel");
const sellerCustomerModel = require("../models/chat/sellerCustomerModel");
const sellerModel = require("../models/sellerModel");
const { createToken } = require("../utils/generateToken");
const { responseReturn } = require("../utils/response");
const bcrypt = require("bcrypt");
class authController {
  admin_login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await adminModel.findOne({ email }).select("+password");
      if (admin) {
        const matchedPassword = await bcrypt.compare(password, admin.password);
        if (matchedPassword) {
          const token = await createToken(admin.id, admin.role);

          res.cookie("accessToken", token, {
            httpOnly: true,
            secure: true,
            expires: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
          });

          responseReturn(res, 200, {
            token,
            message: "Login successful",
          });
        } else {
          responseReturn(res, 401, {
            error: "Credentials did not match",
          });
        }
      } else {
        responseReturn(res, 404, {
          error: "Admin not found",
        });
      }
    } catch (error) {
      responseReturn(res, 500, {
        error: error.message,
      });
    }
  };

  // Seller registration
  seller_register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existingSeller = await sellerModel.findOne({ email });
      if (existingSeller) {
        return responseReturn(res, 400, {
          error: "Seller with this email already exists",
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newSeller = await sellerModel.create({
          name,
          email,
          password: hashedPassword,
          method: "manual",
          shopInfo: {},
        });

        await sellerCustomerModel.create({ myId: newSeller.id });

        const token = await createToken({
          id: newSeller.id,
          role: newSeller.role,
        });
        res.cookie("accessToken", token, {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
        });
        responseReturn(res, 201, {
          token,
          message: "Seller registered successfully",
        });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };

  // Seller Login
  seller_login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const seller = await sellerModel.findOne({ email }).select("+password");
      if (seller) {
        const matchedPassword = await bcrypt.compare(password, seller.password);
        if (matchedPassword) {
          const token = await createToken(seller.id, seller.role);

          res.cookie("accessToken", token, {
            httpOnly: true,
            secure: true,
            expires: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
          });

          responseReturn(res, 200, {
            token,
            message: "Login successful",
          });
        } else {
          responseReturn(res, 401, {
            error: "Credentials did not match",
          });
        }
      } else {
        responseReturn(res, 404, {
          error: "Seller not found",
        });
      }
    } catch (error) {
      responseReturn(res, 500, {
        error: error.message,
      });
    }
  };

  // Get users profile
  get_users_profile = async (req, res) => {
    const { id, role } = req;
    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, {
          userInfo: user,
        });
      } else {
        const seller = await sellerModel.findById(id);
        responseReturn(res, 200, {
          userInfo: seller,
        });
      }
    } catch (error) {
      responseReturn(res, 500, {
        error: error.message,
      });
    }
  };

  upload_profile_image = async (req, res) => {
    const { id } = req;
    const form = new IncomingForm({ multiples: true });

    form.parse(req, async (err, _, files) => {
      try {
        if (err) {
          return responseReturn(res, 500, { error: err.message });
        }

        const file = Array.isArray(files.image) ? files.image[0] : files.image;

        if (!file) {
          return responseReturn(res, 400, { error: "No image file provided" });
        }
        // cloudinary config
        cloudinary.config({
          cloud_name: process.env.CLOUD_NAME,
          api_key: process.env.API_KEY,
          api_secret: process.env.API_SECRET,
          secure: true,
        });

        const result = await cloudinary.uploader.upload(file.filepath, {
          folder: `profile_images/seller`,
        });
        console.log(result);

        if (result) {
          await sellerModel.findByIdAndUpdate(id, {
            image: result.secure_url,
          });

          const updatedSeller = await sellerModel.findById(id);

          return responseReturn(res, 200, {
            updatedSeller,
            message: "Profile image uploaded successfully",
          });
        } else {
          return responseReturn(res, 500, { error: "Image upload failed" });
        }
      } catch (error) {
        return responseReturn(res, 500, {
          error: error.message,
          details: error,
        });
      }
    });
  };

  add_profile_info = async (req, res) => {
    const { shopName, division, district, sub_district } = req.body;
    const { id } = req;
    try {
      await sellerModel.findByIdAndUpdate(id, {
        shopInfo: {
          shopName,
          division,
          district,
          sub_district,
        },
      });
      const userInfo = await sellerModel.findById(id);

      return responseReturn(res, 201, {
        message: "Profile information added successfully",
        userInfo,
      });
    } catch (error) {
      return responseReturn(res, 501, { error: error.message });
    }
  };
}

module.exports = new authController();
