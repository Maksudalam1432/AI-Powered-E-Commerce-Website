import mongoose from "mongoose";

const Userschema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true
    },
    Email: {
      type: String,
      required: true,
      unique: true
    },
    Password: {
      type: String,
      required: true
    },
    cartdata: {
      type: Object,
      default: {}
    }
  },
  { timestamps: true, minimize: false }
);

const User = mongoose.model("User", Userschema);

export default User;
