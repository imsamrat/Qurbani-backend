const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var donerSchema = new mongoose.Schema(
  {
    donerName: {
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
module.exports = mongoose.model("Doner", donerSchema);
