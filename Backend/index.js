import express from "express"
import dotenv from "dotenv"
import DBconnect from "./config/db.js"
import cookieparser from "cookie-parser"
import Authroute from "./route/Authroute.js"
dotenv.config()
let app=express()
app.use(express.json())
app.use(cookieparser())
let PORT=process.env.PORT ||4000

app.use("/api/auth", Authroute);



app.listen(PORT,()=>{
    DBconnect()
     console.log(`server start port no ${PORT}`)
})


