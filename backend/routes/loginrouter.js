const express=require("express")

const login=require("../controllers/login.js")
const loginRouter=express.Router()

loginRouter.post('/login',login)
module.exports=loginRouter