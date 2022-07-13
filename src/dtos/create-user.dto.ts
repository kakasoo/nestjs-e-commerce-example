import { PickType } from '@nestjs/swagger';
import { User } from '../models/tables/user';

export class CreateUserDto extends PickType(User, [
  'name',
  'nickname',
  'email',
  'gender',
  'smsAdsConsent',
  'emailAdsConsent',
] as const) {}
