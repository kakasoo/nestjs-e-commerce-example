import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { LoginUserDto } from '@root/models/dtos/login-user.dto';
import { LocalGuard } from './guards/local.guard';

@Controller()
export class AuthController {
  @ApiBody({ type: LoginUserDto })
  @UseGuards(LocalGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
