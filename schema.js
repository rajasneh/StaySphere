const Joi = require("joi");
const review = require("./models/review");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.alternatives().try(
            Joi.object({
                filename: Joi.string().default("listingimage"), // Ensure filename is a string
                url: Joi.string().uri()
            }).allow(null, ""), // Allow the entire image object to be null or empty
            Joi.string() // Allow plain strings
        ) // Removed .required() here
    }).required()
});

module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required()
    }).required()
});