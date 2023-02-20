import {Module} from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsSerivce } from './products.service';

@Module({
    controllers:[ProductsController],
    providers: [ProductsSerivce]
})
export class ProductsModule{}