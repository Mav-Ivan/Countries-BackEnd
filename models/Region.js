const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema(
  {
    region: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Region", regionSchema);
