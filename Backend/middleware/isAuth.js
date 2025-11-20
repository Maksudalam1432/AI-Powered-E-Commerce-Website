import jwt from "jsonwebtoken"


const isAuth=async(req,res,next)=>{
     try {

        let {token}=req.cookie;

        if(!token){
             return res.status(400).json({message:"User does not found"})
        }
        let verifytoken=jwt.verify(token,process.env.SECRET_KEY)
        
        if(!verifytoken){
             return res.status(400).json({message:"User does not valid token"})
        }
        req.userId=verifytoken.userId
        next()
     } catch (error) {
        console.log("isauth error")
        return res.status(500).json({message:`isAuth error ${error}`})
        
     }
}

export default isAuth;