import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

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

export interface HookNextFunction {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (error?: Error): any
  }

UserSchema.pre('save', async function(next: HookNextFunction ) {
    try{
        if (!this.isModified('password')){
            return next();
        }
        const hashed=await bcrypt.hash(this['password'],10)
        this['password']=hashed;
        return next();
    }catch (err){
        return next(err);
    }
})