import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../models/tables/user';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  userLogin(user: User) {
    const token = this.jwtService.sign({ ...user });
    return { token };
  }
}
