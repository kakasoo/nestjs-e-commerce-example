import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User as UserEntity } from '../models/tables/user';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from '../providers/users.service';
import { KaKaoGuard } from '../auth/guards/kakao.guard';
import { User } from '../common/decorators/user.decorator';
import { Profile } from 'passport-kakao';
import { AuthService } from '../auth/auth.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { ApiHeader } from '@nestjs/swagger';

@Controller('api/users')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('sign-up')
  async signUp(@Body() dto: CreateUserDto): Promise<UserEntity> {
    return await this.usersService.create(dto);
  }

  @UseGuards(KaKaoGuard)
  @Get('kakao/sign-in')
  async kakaoSignIn() {}

  @UseGuards(KaKaoGuard)
  @Get('kakao/callback')
  async kakaoCallback(@User() profile: Profile): Promise<{ token: string }> {
    const { id: oauthId, username: name } = profile;
    let user = await this.usersService.findOne({ oauthId, name });
    if (!user) {
      user = await this.usersService.create({ oauthId, name, nickname: name });
    }
    return this.authService.userLogin(user);
  }

  @ApiHeader({ name: 'token' })
  @UseGuards(JwtGuard)
  @Get('profile')
  async getProfile(@User() user: UserEntity) {
    return user;
  }
}
