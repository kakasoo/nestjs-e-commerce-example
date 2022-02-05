import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from 'src/providers/categories.service';
import { Category } from '../models/tables/category';

@Controller('api/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAll(): Promise<Category[]> {
    return this.categoriesService.getAll();
  }
}
