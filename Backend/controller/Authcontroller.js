import bcrypt from "bcryptjs";
import User from "../model/User.js";
import gentoken from "../utils/Token.js";
import validator from "validator";
import { json } from "express";
export  const Signup = async (req, res) => {
  try {
    let { Name, Email, Password } = req.body;

    if (!Name || !Email || !Password) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    const findemail = await User.findOne({ Email });

    if (findemail) {
      return res.status(400).json({ message: "Email is already registered" });
    }
    if (!validator.isEmail(Email)) {
      return res.status(400).json({ message: "Enter valid Email" });
    }

    if (Password.length < 8) {
      return res.status(400).json({ message: "Enter Stronge Password" });
    }

    const hashpaaword = await bcrypt.hash(Password, 10);

    const user = await User.create({
      Name,
      Email,
      Password: hashpaaword,
    });

    const token = gentoken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({
      message: "Signup Successful",
       user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const Login=async(req,res)=>{
     try {

   let  {Email ,Password} = req.body;

   if(!Email || !Password){
  return  res.status(401).json({
        message:"Please fill all required fields"
    })
   }
   
   const user=await User.findOne({Email})

   if(!user){
   return  res.status(400).json({message:"Email Does Not exits"})
   }
   let ismatch=await bcrypt.compare(Password,user.Password)

   if(!ismatch){
   return  res.status(401).json({message:"Password Is incorrect"})
   }     

   
   const token = gentoken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({
      message: "Login Successful",
      user
    });
        
     } catch (error) {
        res.status(500).json({ message: error.message });
     }
}


export const Logout = (req, res) => {
  try {
  res.clearCookie("Toekn")

    return res.status(200).json({ message: "Logout Successfully" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
