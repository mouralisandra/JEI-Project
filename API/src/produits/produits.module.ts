import { ProduitSchema } from '../models/produit.schema';
import {Module} from '@nestjs/common';
import { ProduitsController } from './produits.controller';
import { ProduitsService } from './produits.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from '../shared/shared.module';


@Module({
    imports: [
        MongooseModule.forFeature([{name: "Produit", schema: ProduitSchema}]), 
        SharedModule
    ],
    controllers:[ProduitsController],
    providers: [ProduitsService]
})
export class ProduitsModule{}