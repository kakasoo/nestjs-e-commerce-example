import { PickType } from '@nestjs/swagger';
import { User } from '../models/tables/user';

export class CreateUserDto extends PickType(User, [
  'oauthId',
  'name',
  'nickname',
] as const) {}
