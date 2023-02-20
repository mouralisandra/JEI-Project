import * as mongoose from 'mongoose';

export const ProduitSchema=new mongoose.Schema({
    nom:String,
    description:String,
    qte:Number,
    prix:Number,
    image:String,
    idCommercant:[
        {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    ],
    created:{
        type:Date,
        default:Date.now
    }
})