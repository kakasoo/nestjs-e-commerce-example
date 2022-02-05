import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/tables/user';
import { TypeOrmModuleOptions } from '../config/typeorm';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../providers/users.service';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../modules/users.module';
import { AuthService } from '../auth/auth.service';

describe('User Entity', () => {
  let controller: UsersController;
  let service: UsersService;
  let authService: AuthService;
  let user;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync(TypeOrmModuleOptions),
        TypeOrmModule.forFeature([User]),
        ConfigModule.forRoot({ isGlobal: true }),
        UsersModule,
        AuthModule,
      ],
      controllers: [],
      providers: [],
    }).compile();

    service = module.get<UsersService>(UsersService);
    controller = module.get<UsersController>(UsersController);

    authService = module.get<AuthService>(AuthService);
  });

  describe('0. 테스트 환경을 확인합니다.', () => {
    it.only('0-1. Service와 Controller 가 정의되어야 합니다.', async () => {
      expect(controller).toBeDefined();
      expect(service).toBeDefined();
    });
  });

  describe('1. 유저의 생성 로직을 검증합니다.', () => {
    it.only('1-1. 유저를 생성하거나 조회합니다.', async () => {
      const userToCreate = { oauthId: 'test', name: 'test', nickname: 'test' };
      user = await service.findOne(userToCreate);
      if (!user) {
        user = await service.create(userToCreate);
      }
      expect(user).toBeDefined();
    });
  });
});
