const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review=require("./review.js")

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },   
    image: {
        filename: {
            type: String,
            default: "listingimage"  // Default value for filename
        },
        url: {
            type: String,
            default: "https://plus.unsplash.com/premium_photo-1661947436461-a9ab4ecdd37a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Default value for url
            set: (v) => 
                v === "" 
                ? "https://unsplash.com/photos/an-aerial-view-of-a-house-with-a-grass-roof-_c2O_GfQVDg" 
                : v,
        }
    },
    price: {
        type: Number,
    },
    
    country: {
        type: String,
    },
    location: {
        type: String,
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
         await Review.deleteMany({_id:{$in: listing.reviews}});
    }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;