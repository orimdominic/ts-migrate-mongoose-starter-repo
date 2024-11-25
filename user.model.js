const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: true,
    },
    favouriteEmoji: {
      type: String,
      required: true,
    },
    yearOfBirth: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

module.exports.UserModel = mongoose.model("User", userSchema);
