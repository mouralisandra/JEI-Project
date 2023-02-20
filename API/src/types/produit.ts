import { Document } from 'mongoose';
import {User} from './user'
export interface Produit extends Document{
    nom: string,
    description: string,
    qte: number,
    prix: number,
    idCommercant: User,
    created: Date,
}