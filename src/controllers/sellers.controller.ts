import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SellersService } from '../providers/sellers.service';

@ApiTags('판매자 / Sellers')
@Controller('api/sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}
}
