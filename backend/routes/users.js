const router =require("express").Router();

router.get("/",(req,res)=>{
 res.send("Hey it's users routes")
})

module.exports=router
