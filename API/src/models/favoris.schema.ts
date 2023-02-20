import * as mongoose from 'mongoose';

export const FavorisSchema=new mongoose.Schema({
    idClient:[
        {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    ],
    idProduit:[
        {type: mongoose.Schema.Types.ObjectId, ref: 'Produit'}
    ],
    created:{
        type:Date,
        default:Date.now
    }
})