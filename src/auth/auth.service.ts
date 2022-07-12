import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../models/tables/user';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  validate(username: string, password: string) {}

  userLogin(user: User) {
    const token = this.jwtService.sign({ ...user });
    return { token };
  }
}
