/*
#Developed by yash jangid
#Github-Link -> https://github.com/writer-yash21
*/
import mongoose from "mongoose";

const Note = mongoose.Schema({
   email:{type:String},
   note:{type:String}
})

export default Note;