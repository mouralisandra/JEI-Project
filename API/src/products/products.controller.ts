import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsSerivce } from './products.service';
@Controller('products/')
export class ProductsController {
    constructor(private readonly commercantSerivce:ProductsSerivce){}
    @Post()
    addProduct(
        @Body('name') name:string,
        @Body('price') price:number,
        @Body('description') description:string,
        @Body('qte') qte:number
    ):any{
        const id=this.commercantSerivce.addProduct(name,price,description, qte); 
        return {id:id};
    }

    @Get()
    getProducts(){
        return this.commercantSerivce.getProducts();
    }
    @Get(':id')
    getProduct(@Param('id') id:string){
        return this.commercantSerivce.getProduct(id);
    }
}