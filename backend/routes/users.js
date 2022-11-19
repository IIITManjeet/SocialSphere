const router =require("express").Router();
const User=require("../models/User");

router.get("/",(req,res)=>{
 res.send("Hey it's users routes")
})

module.exports=router
