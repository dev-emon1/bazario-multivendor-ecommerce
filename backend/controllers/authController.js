class authController {
  admin_login = async (req, res) => {
    console.log(req.body);
    res.send({
      message: "Admin login successful",
      user: req.body,
    });
  };
}

module.exports = new authController();
