const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
const path=require("path");

const MONGO_URL="mongodb://127.0.0.1:27017/staysphere";


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


async function main(){
    await mongoose.connect(MONGO_URL);
}

main()
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    })


app.get("/",(req,res)=>{
    console.log("Hi i am root");
    res.send("Working");
});

app.get("/listings",async (req,res)=>{
    const allListings=await Listing.find({});
    res.render("/listings/index.ejs",{allListings});
});


// app.get("/test",async (req,res)=>{
//     let sampleListing=new Listing({
//         title:"My new villa",
//         description:"By the beach",
//        price:1200,
//        location:"Goa.calangute",
//        country:"India"  
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Sucessful");
// });

app.listen(8080,()=>{
    console.log("Server is listening on 8080");
});