import jwt from "jsonwebtoken"

const gentoken =(userId)=>{

    try {
        let token=jwt.sign({userId},process.env.SECRET_KEY,{expiresIn:"7d"})
        return token
    } catch (error) {
         console.log(error)
    }
}
export default gentoken