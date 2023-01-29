const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const empolyeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minLength: [2, "name should be two letter"],
      maxLength: [20, "name should be within 20 letter"],
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Super Admin", "Employee"],
      default: "Employee",
    },
  },
  { timestamps: true, validateBeforeSave: true }
);

empolyeeSchema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.name = this.name.toLowerCase();
  if (!this.isModified("password")) return;
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

empolyeeSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcryptjs.compare(canditatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("Employee", empolyeeSchema);
