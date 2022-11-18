const router = require("express").Router();
const User=require("../models/User")

router.get("/register",async (req, res) => {
 const user=await new User({
  username:"John",
  email:"john@gmail.com",
  password:"123456"
 })

 await user.save()
 res.send("Ok")
})

module.exports = router