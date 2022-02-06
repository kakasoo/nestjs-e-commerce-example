import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../models/tables/product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async getDetail(productId: number) {
    return await this.productsRepository
      .createQueryBuilder('product')
      .withDeleted()
      .leftJoinAndMapMany('prouct.headers', 'product.headers', 'header')
      .leftJoinAndMapMany('product.bodies', 'product.bodies', 'body')
      .leftJoinAndMapMany(
        'product.categories',
        'product.categories',
        'category',
        'category.deletedAt IS NULL',
      )
      .leftJoinAndMapMany(
        'product.options',
        'product.options',
        'option',
        'option.deletedAt IS NULL AND option.isSale = :isSale',
        { isSale: true },
      )
      .where('product.id = :productId', { productId })
      .andWhere('product.isSale = :isSale', { isSale: true })
      .getOne();
  }
}
