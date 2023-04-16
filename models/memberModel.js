const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var memberSchema = new mongoose.Schema(
  {
    englishName: {
      type: String,
      required: true,
    },
    banglaName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    member: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Submitted",
      enum: ["Submitted", "Contacted", "In Progress", "Resolved"],
    },
    // status: {
    //   type: String,
    //   default: "বাকি আছে",
    //   enum: ["সম্পন্ন হয়েছে", "পরে নিবে", "তথ্য নেই",],
    // },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Member", memberSchema);
