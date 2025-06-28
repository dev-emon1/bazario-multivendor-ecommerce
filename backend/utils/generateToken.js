const jwt = require("jsonwebtoken");

module.exports.createToken = (id, role) => {
  try {
    const token = jwt.sign(
      { id, role }, // payload must be an object
      process.env.TOKEN_SECRET,
      {
        expiresIn: "4d",
      }
    );
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};
