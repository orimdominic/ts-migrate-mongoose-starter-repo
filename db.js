const mongoose = require("mongoose");

module.exports.connect = function (url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.info("MongoDB connection successful");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB database", err);
      throw err;
    });
};
