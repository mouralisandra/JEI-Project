import * as mongoose from 'mongoose';
enum EtatCommande {
    pending,
    approved,
    rejected
  }
export const CommandeSchema=new mongoose.Schema({
    prixTotale:{
        type:Number,
        default:0
    },
    idClient:[
        {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    ],
    produits:[
        {
            produit:{
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Produit'
            },
            quantity:{
                type:Number,
                default:0
            }
        }
    ],
    etat:{
        type:EtatCommande,
        default: EtatCommande.pending
    },
    created:{
        type:Date,
        default:Date.now
    }
})