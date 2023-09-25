const mongoose=require("mongoose");
// connection creation
mongoose.connect("mongodb://localhost:27017/Project",{userNewUrlParser:true,useUnifiedTopology: true})
.then(()=> console.log("connection successful...."))
.catch((err)=>console.log(err));

const Schedule=mongoose.Schema({

   name:{
    type:String
   },
   mail:{
    type:String
   }

})


// Info of Case in details
// fetch the description 

const infoOfCase=mongoose.Schema({
 
    caseId:{
        type:Number
    },
    caseTitle:{
        type:String
    }


})

// decision of Judge can make the changes on the status of case directly

// dismiss court means redirect the page to the home page of user

// Judge on Leave --> iska aap dekh lo kaisa krna h