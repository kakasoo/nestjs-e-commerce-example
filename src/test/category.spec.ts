import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../models/tables/category';
import { TypeOrmModuleOptions } from '../config/typeorm';
import { CategoriesController } from '../controllers/categories.controller';
import { CategoriesService } from '../providers/categories.service';
import { AuthModule } from '../auth/auth.module';
import { CategoriesModule } from '../modules/categories.module';
import { AuthService } from '../auth/auth.service';

describe('Category Entity', () => {
  let controller: CategoriesController;
  let service: CategoriesService;
  let authService: AuthService;
  let category;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync(TypeOrmModuleOptions),
        TypeOrmModule.forFeature([Category]),
        ConfigModule.forRoot({ isGlobal: true }),
        CategoriesModule,
        AuthModule,
      ],
      controllers: [],
      providers: [],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    controller = module.get<CategoriesController>(CategoriesController);

    authService = module.get<AuthService>(AuthService);
  });

  describe('0. 테스트 환경을 확인합니다.', () => {
    it.only('0-1. Service와 Controller 가 정의되어야 합니다.', async () => {
      expect(controller).toBeDefined();
      expect(service).toBeDefined();
    });
  });

  describe('1. 카테고리들을 조회합니다.', () => {
    it.only('1-1. Response는 Category의 배열입니다.', async () => {
      const categories = await controller.getAll();
      expect(categories).toBeInstanceOf(Array);
    });
  });

  describe('2. 카테고리 별 상품을 조회합니다.', () => {
    it.only('2-1. 카테고리 id에 따른 상품들을 조회합니다.', async () => {
      const products = await controller.getProductsBy(1);
      expect(products).toBeInstanceOf(Array);
    });
  });
});
