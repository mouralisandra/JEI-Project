import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsSerivce } from './products.service';
@Controller('products/')
export class ProductsController {
    constructor(private readonly productsSerivce:ProductsSerivce){}
    @Post()
    addProduct(
        @Body('name') name:string,
        @Body('price') price:number,
        @Body('description') description:string,
        @Body('qte') qte:number
    ):any{
        const id=this.productsSerivce.addProduct(name,price,description, qte); 
        return {id:id};
    }

    @Get()
    getProducts(){
        return this.productsSerivce.getProducts();
    }
    @Get(':id')
    getProduct(@Param('id') id:string){
        return this.productsSerivce.getProduct(id);
    }
    @Patch(':id')
    updateProduct(
        @Param('id') id:string,
        @Body('name') name:string,
        @Body('price') price:number,
        @Body('description') description:string,
        @Body('qte') qte:number
    ){
        return this.productsSerivce.updateProduct(id,name,price,description,qte);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id:string){
        return this.productsSerivce.deleteProduct(id);
    }
}