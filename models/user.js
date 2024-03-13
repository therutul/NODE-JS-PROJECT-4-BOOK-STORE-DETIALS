const mongoose=require('../config/config')
const userSchema=new mongoose.Schema({
    bookName: String,
    bookImg: String,
    bookAuthor: String,
    bookDesc: String,
    bookRating: Number,
    bookPrice: String
})
module.exports=mongoose.model('User',userSchema)