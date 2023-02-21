import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  
  import { CommercantGuard } from '../guards/commercant.guard';
  import { Produit } from '../types/produit';
  import { User as UserDocument } from '../types/user';
  import { User } from '../utilities/user.decorator';
  import { CreateProduitDTO, UpdateProduitDTO } from './produit.dto';
  import { ProduitsService } from './produits.service';
  
  @Controller('produits')
  export class ProduitsController {
    constructor(private produitService: ProduitsService) {}
  
    @Get()
    async listAll(): Promise<Produit[]> {
      return await this.produitService.getProduits();
    }
  
    @Get('/mine')
    @UseGuards(AuthGuard('jwt'), CommercantGuard)
    async listMine(@User() user: UserDocument): Promise<Produit[]> {
      const { id } = user;
      return await this.produitService.findByOwner(id);
    }
  
    @Get('/commercant/:id')
    async listBySeller(@Param('id') id: string): Promise<Produit[]> {
      return await this.produitService.findByOwner(id);
    }
  
    @Post()
    @UseGuards(AuthGuard('jwt'), CommercantGuard)
    async create(
      @Body() product: CreateProduitDTO,
      @User() user: UserDocument,
    ): Promise<Produit> {
      return await this.produitService.addProduit(product, user);
    }
  
    @Get(':id')
    async read(@Param('id') id: string): Promise<Produit> {
      return await this.produitService.getProduit(id);
    }
  
    @Put(':id')
    @UseGuards(AuthGuard('jwt'), CommercantGuard)
    async update(
      @Param('id') id: string,
      @Body() product: UpdateProduitDTO,
      @User() user: UserDocument,
    ): Promise<Produit> {
      const { id: userId } = user;
      return await this.produitService.updateProduit(id, product, userId);
    }
  
    @Delete(':id')
    @UseGuards(AuthGuard('jwt'), CommercantGuard)
    async delete(
      @Param('id') id: string,
      @User() user: UserDocument,
    ): Promise<Produit> {
      const { id: userId } = user;
      return await this.produitService.deleteProduit(id, userId);
    }
  }