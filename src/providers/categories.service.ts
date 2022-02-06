import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../models/tables/category';
import { Product } from '../models/tables/product';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.categoriesRepository.find();
  }

  async getProductsBy(categoryId: number): Promise<Product[]> {
    const [category] = await this.categoriesRepository.find({
      relations: ['products'],
      where: { id: categoryId },
      take: 1,
    });

    return category ? category.products : new Array<Product>();
  }
}
