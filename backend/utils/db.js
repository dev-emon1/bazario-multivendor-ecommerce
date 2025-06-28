const mongoose = require("mongoose");

module.exports.dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected...");
  } catch (error) {
    console.log(error.message);
  }
};
