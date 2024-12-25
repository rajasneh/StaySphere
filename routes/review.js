const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const {
    validateReview,
    isLoggedIn,
    isReviewAuthor
}=require("../middleware.js");

const reviewControl=require("../controllers/reviews.js");


//REVIEWS

//post review route
router.post("/",validateReview,isLoggedIn,wrapAsync(reviewControl.createReview));

//Delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewControl.destroyReview));


module.exports=router;