import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User as UserEntity } from '../models/tables/user';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from '../providers/users.service';
import { KaKaoGuard } from '../auth/guards/kakao.guard';
import { User } from '../common/decorators/user.decorator';
import { Profile } from 'passport-kakao';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('sign-up')
  async signUp(@Body() dto: CreateUserDto): Promise<UserEntity> {
    return await this.usersService.create(dto);
  }

  @UseGuards(KaKaoGuard)
  @Get('kakao/sign-in')
  async kakaoSignIn() {}

  @UseGuards(KaKaoGuard)
  @Get('kakao/callback')
  async kakaoCallback(@User() profile: Profile) {
    const { id, username } = profile;
  }
}
