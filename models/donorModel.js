const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var donorSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: true,
    },
    meatQuantity: {
      type: Number,
      required: true,
    },
    boneQuantity: {
      type: Number,
      required: true,
    },
    liverQuantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Donor", donorSchema);
