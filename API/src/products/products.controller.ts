import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ProductsSerivce } from './products.service';
@Controller('products/')
export class ProductsController {
    constructor(private readonly ProductsSerivce:ProductsSerivce){}
    @Post()
    addProduct(
        @Body('name') name:string,
        @Body('price') price:number,
        @Body('description') description:string,
        @Body('qte') qte:number
    ):any{
        const id=this.ProductsSerivce.addProduct(name,price,description, qte); 
        return {id:id};
    }

    @Get()
    getProducts(){
        return this.ProductsSerivce.getProducts();
    }
    @Get(':id')
    getProduct(@Param('id') id:string){
        return this.ProductsSerivce.getProduct(id);
    }
    @Patch(':id')
    updateProduct(
        @Param('id') id:string,
        @Body('name') name:string,
        @Body('price') price:number,
        @Body('description') description:string,
        @Body('qte') qte:number
    ){
        return this.ProductsSerivce.updateProduct(id,name,price,description,qte);
    }
}