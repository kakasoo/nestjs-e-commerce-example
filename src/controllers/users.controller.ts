import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../models/tables/user';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from '../providers/users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   *
   * @param dto 생성할 유저의 정보
   * @returns 새로 생성된 유저의 정보
   */
  @Post()
  async signUp(@Body() dto: CreateUserDto): Promise<User> {
    return await this.usersService.create(dto);
  }
}
