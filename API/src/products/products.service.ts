import {Injectable, NotFoundException} from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsSerivce{
    private products: Product[]=[];

    addProduct(title:string,price:number,description:string, qte:number):string{
        const newProduct=new Product(String(this.products.length),title,price,description,qte);
        this.products.push(newProduct);
        return String(this.products.length-1);
    }

    getProducts(){
        return this.products;
    }

    getProduct(id:string){
        const product=this.products.find((prod)=>prod.id==id);
        if(!product){
            throw new NotFoundException("didn't find project");
        }
        return product;
    }

    updateProduct(id:string,title:string,price:number,description:string, qte:number){
        const productIndex=this.products.findIndex((prod)=>prod.id==id);
        const product=this.products[productIndex];
        if(!product){
            throw new NotFoundException("didn't find project");
        }
        if(title) product.name=title;
        if(price) product.price=price;
        if(description) product.description=description;
        if(qte) product.qte=qte;
        this.products[productIndex]=product;
        return product;
    }
}