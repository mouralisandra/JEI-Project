import { Document } from 'mongoose';
export interface User extends Document{
    nom: string,
    readonly password: string,
    commercant: boolean,
    biographie: string,
    email: string,
    image: string,
    created: Date,
}