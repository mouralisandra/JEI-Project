import { Produit } from '../types/produit';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../types/user';
import { CreateProduitDTO, UpdateProduitDTO } from './produit.dto';

@Injectable()
export class ProduitsService{
    constructor(@InjectModel('Produit') private produitModel: Model<Produit>) {}

    async addProduit(ProduitDTO: CreateProduitDTO, user: User): Promise<Produit> {
        const Produit = await this.produitModel.create({
            ...ProduitDTO,
            idCommercant: user,
          });
        await Produit.save();
        return Produit.populate('idCommercant')
    }
    async findByOwner(userId: string): Promise<Produit[]> {
        return await this.produitModel.find({ owner: userId }).populate('owner');
      }


    async getProduits(): Promise<Produit[]> {
        return await this.produitModel.find().populate('idCommercant');
      }

    async getProduit(id:string){
        const Produit = await this.produitModel.findById(id).populate('idCommercant');
        if (!Produit) {
          throw new HttpException('Produit not found', HttpStatus.NO_CONTENT);
        }
        return Produit;
    }

    async updateProduit(
        id: string,
        ProduitDTO: UpdateProduitDTO,
        userId: string,
      ): Promise<Produit> {
        const Produit = await this.produitModel.findById(id);
        if (userId !== Produit.idCommercant.toString()) {
          throw new HttpException(
            'You do not own this Produit',
            HttpStatus.UNAUTHORIZED,
          );
        }
        await Produit.update(ProduitDTO);
        return await this.produitModel.findById(id).populate('idCommercant');
    }

    async deleteProduit(id: string, userId: string): Promise<Produit> {
        const Produit = await this.produitModel.findById(id);
        if (userId !== Produit.idCommercant.toString()) {
          throw new HttpException(
            'You do not own this Produit',
            HttpStatus.UNAUTHORIZED,
          );
        }
        await Produit.remove();
        return Produit.populate('idCommercant');
      }
}