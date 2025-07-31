const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized access" });
  } else {
    try {
      const decoded = await jwt.verify(accessToken, process.env.TOKEN_SECRET);
      req.role = decoded.role;
      req.id = decoded.id;
      next();
    } catch (error) {
      return res.status(401).json({ error: "Invalid token" });
    }
  }
};
