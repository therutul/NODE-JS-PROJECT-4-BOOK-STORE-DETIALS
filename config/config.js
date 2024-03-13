const mongoose=require('mongoose')
mongoose
    .connect("mongodb+srv://rutull009:rutull009@tonystark.5m0zfsz.mongodb.net/?retryWrites=true&w=majority&appName=tonystark")
    .then(()=>{
    console.log("Connected")
})
module.exports=mongoose