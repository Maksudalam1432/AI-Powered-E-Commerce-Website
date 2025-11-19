import mongoose from "mongoose";

const  DBconnect =async ()=>{
     try{
       await mongoose.connect(process.env.MONGO_URL)
         console.log("DB Connect Succesfullly")
     }
     catch(error){
         console.log("DB Connect failed")
     }
}


export default DBconnect;