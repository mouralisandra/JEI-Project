import * as mongoose from 'mongoose';

export const UserSchema=new mongoose.Schema({
    nom:String,
    password:String,
    commercant:{
        type:Boolean,
        default:false
    },
    biographie:String,
    email:String,
    image:String,
    created:{
        type:Date,
        default:Date.now
    }
})