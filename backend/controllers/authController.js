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
}

module.exports = new authController();
