import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User as UserEntity } from '../models/tables/user';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from '../providers/users.service';
import { KaKaoGuard } from '../auth/guards/kakao.guard';
import { User } from '../common/decorators/user.decorator';
import { Profile } from 'passport-kakao';
import { AuthService } from '../auth/auth.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('유저 / User')
@Controller('api/users')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  // @ApiOperation({summary : 'MVP : Local 로그인을 위한 User 생성'})
  // @Post('sign-up')
  // async signUp(@Body() dto: CreateUserDto): Promise<UserEntity> {
  //   return await this.usersService.create(dto);
  // }

  @ApiOperation({ summary: 'MVP : 카카오톡을 이용한 로그인' })
  @UseGuards(KaKaoGuard)
  @Get('kakao/sign-in')
  async kakaoSignIn() {}

  @ApiOperation({ summary: 'MVP : 카카오톡 로그인 후 Redirect 되는 경로' })
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

  @ApiOperation({ summary: 'MVP : 유저 프로필 조회 & 토큰에 담긴 값 Parsing.' })
  @ApiHeader({ name: 'token' })
  @UseGuards(JwtGuard)
  @Get('profile')
  async getProfile(@User() user: UserEntity) {
    return user;
  }
}
