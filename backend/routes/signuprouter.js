const express=require("express")
const {Signup}=require("../controllers/signup.js")
const router=express.Router()

router.post('/signup', Signup)
module.exports= router