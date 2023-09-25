const mongoose=require("mongoose");
// connection creation
mongoose.connect("mongodb://localhost:27017/Project",{userNewUrlParser:true,useUnifiedTopology: true})
.then(()=> console.log("connection successful...."))
.catch((err)=>console.log(err));


// Schema

// --> total Cases
// --> resolved Cases
// --> active Cases
// --> Transaction Details
