const adminModel = require("../models/adminModel");
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
            error: "Credentials do not match",
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
        console.log("Seller Info");
      }
    } catch (error) {
      responseReturn(res, 500, {
        error: error.message,
      });
    }
  };
}

module.exports = new authController();
