import { User } from "../models/user.js"

export const getAllUsers =  async (req, res) =>{
    const users = await User.find({})
     res.json({
         success: true,
         users
     })
 }

 export const addNewUsers = async(req, res) =>{
    
    await User.create({
         name: req.body.name,
         email: req.body.email
     })
     res.json({
         success:true,
         message:"User created successfully"
     })
 }