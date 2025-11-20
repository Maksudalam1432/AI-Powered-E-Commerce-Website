
import User from "../model/User.js"


export const getCurrentUser=async(req,res)=>{
    try {
         let user=await User.findById(requestAnimationFrame.userId).select("-Password")
          if(!user){
               return res.status(400).json({message:"User does not found"})
          }

         return res.status(200).json(user)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:`getCurrentUser error ${error  }`})
        
    }
}