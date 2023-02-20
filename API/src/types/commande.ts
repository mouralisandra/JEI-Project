import { Document } from 'mongoose';
import {User} from './user';
import {Produit} from './produit';

enum EtatCommande {
    pending,
    approved,
    rejected
}

interface commandeProduit{
    produit: Produit,
    quantity: number,
}
export interface Commande extends Document{
    prixTotale: number,
    idClient: User,
    produits: commandeProduit[],
    etat:EtatCommande,
    created: Date
}