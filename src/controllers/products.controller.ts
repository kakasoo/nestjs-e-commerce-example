import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from '../providers/products.service';

@ApiTags('상품 / Products')
@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
}
