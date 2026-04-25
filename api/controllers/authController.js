import { userModel } from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const registerUser=async(requestAnimationFrame, res)=>{
    try{
        const {username, email, password}=requestAnimationFrame.body;
        if(!username || !email || !password){
            return res.status(400).json({message:"all fields are required"});
        }
        const existingUser=await userModel.findOne({email:email.toLowerCase()});
        if(existingUser){
            return res.status(400).json({message:"user already registered"});
        }
        const newUser=await userModel.create({
            username,
            email:email.toLowerCase(),
            password
        });
        const {password:pass, ...others}=newUser._doc;
        res.status(201).json(others);
    }
    catch (err) {
  console.error("🔥 ERROR STACK:", err);

  return res.status(500).json({
    message: "Internal Server Error",
  });
}
}

export const loginUser=async(req, res)=>{
    try{
        const {email, password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"all fields are required"});
        }
        const registeredUser=await userModel.findOne({email:email.toLowerCase()});
        if(!registeredUser){
            return res.status(400).json({message:"user not found"});
        }
        const isMatch=await bcrypt.compare(password, registeredUser.password);
        if(!isMatch){
            return res.status(401).json({message:"invalid credentials"});
        }
        const {password:pass, ...others}=registeredUser._doc;
        return res.status(200).json(others);
    }
        catch (err) {
  console.log("🔥 LOGIN ERROR:", err);
  return res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
    }
}














