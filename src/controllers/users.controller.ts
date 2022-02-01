import { Controller } from '@nestjs/common';
import { UsersService } from '../providers/users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
