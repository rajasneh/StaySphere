const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
});


router.post("/signup",wrapAsync(async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        const newUser=new User({email,username});
        const registeresUser=await User.register(newUser,password);
        console.log(registeresUser);
        req.flash("success","Welcome to StaySphere!");
        res.redirect("/listings");
    } catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
    
}));

module.exports=router;