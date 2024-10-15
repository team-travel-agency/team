const express=require("express")

const {login}=require("../controllers/login.js")
const router1=express.Router()

router1.post('/login',login)
module.exports=router1