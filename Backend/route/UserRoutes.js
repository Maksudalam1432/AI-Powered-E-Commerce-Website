import express from "express"
import isAuth from "../middleware/isAuth.js"
import { getCurrentUser } from "../controller/Usercontroller.js"


let userRoutes=express.Router()


userRoutes.post("/getcurrentuser",isAuth,getCurrentUser)
export default userRoutes