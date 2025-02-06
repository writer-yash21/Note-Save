/*
#Developed by yash jangid
#Github-Link -> https://github.com/writer-yash21
*/
import mongoose from "mongoose";

const Account  = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

export default Account;

