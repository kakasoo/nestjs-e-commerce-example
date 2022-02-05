import { Controller, Get } from '@nestjs/common';
import { Category } from '../models/tables/category';

@Controller('api/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesController) {}

  @Get()
  async getAll(): Promise<Category> {
    return this.categoriesService.getAll();
  }
}
