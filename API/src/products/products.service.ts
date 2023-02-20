import {Injectable} from '@nestjs/common';
import {Product} from './product.model';

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
        return product;
    }
}