import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from '../providers/categories.service';
import { Category } from '../models/tables/category';

@ApiTags('카테고리 / Categories')
@Controller('api/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: "생성된 '모든' 카테고리 조회" })
  @Get()
  async getAll(): Promise<Category[]> {
    return this.categoriesService.getAll();
  }
}
