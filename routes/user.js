const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});


router.post("/signup", wrapAsync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeresUser = await User.register(newUser, password);
        console.log(registeresUser);
        req.login(registeresUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to StaySphere!");
            res.redirect("/listings");
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }

}));

router.get("/login", (req, res) => {
    res.render("users/login.ejs")
});

router.post("/login",
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    async (req, res) => {
        req.flash("success", "Welcome back to StaySphere!");
        let redirectUrl=res.locals.redirectUrl || "/listings"
        res.redirect(redirectUrl);
    });


router.get("/logout", (req, res, next) => {
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","You are logged out!");
        res.redirect("/listings");
    })
});


module.exports = router;