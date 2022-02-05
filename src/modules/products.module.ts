import { Module } from '@nestjs/common';
import { ProductsService } from '../providers/products.service';
import { ProductsController } from '../controllers/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../models/tables/product';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
