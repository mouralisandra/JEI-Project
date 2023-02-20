import { Document } from 'mongoose';
import {User} from './user';
import {Produit} from './produit';
export interface Favoris extends Document{
    idClient: User,
    idProduit: Produit,
    created: Date,
}