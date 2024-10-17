const express =require("express")
const getUser=require("../controllers/getUser.js")
const getUserRouter=express.Router()
getUserRouter.get("/getUser",getUser)
module.exports=getUserRouter