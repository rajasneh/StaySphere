const Joi=require("joi");
const review = require("./models/review");
module.exports.listingSchema=Joi.object({
    listing:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        country:Joi.string().required(),
        price:Joi.number().required().min(0),
        image: Joi.object({
            filename: Joi.string().default("listingimage"),  // Ensure filename is a string
            url: Joi.string().uri().default("https://plus.unsplash.com/premium_photo-1661947436461-a9ab4ecdd37a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D").allow("", null) // URL can be empty string or null, otherwise, it must be a valid URL
        }).allow(null,"")
    }).required()
});

module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required()
    }).required()
});