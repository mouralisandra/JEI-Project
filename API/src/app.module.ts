import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import {MongooseModule} from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ProductsModule, UsersModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/JE'), SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
