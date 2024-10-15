const express=require("express")

const {Signup}=require("../controllers/signup.js")
const signupRouter=express.Router()

signupRouter.post('/signup', Signup)
module.exports= signupRouter