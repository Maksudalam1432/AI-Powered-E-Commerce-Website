import express from "express"
import { Login, Logout, Signup } from "../controller/Authcontroller.js"

const  Authroute=express.Router()

Authroute.post('/signup',Signup)
Authroute.post('/login',Login)
Authroute.post('/logout',Logout)

export default Authroute