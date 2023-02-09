import mongoose from "mongoose";

const user=mongoose.Schema({
    todo:{type:String,required:true}
})

export const userSchema= mongoose.model('user',user)