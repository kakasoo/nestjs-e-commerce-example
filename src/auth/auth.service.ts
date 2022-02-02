import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/tables/user';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(oauthId: string): Promise<any> {
    const [user] = await this.usersRepository.find({
      where: { oauthId },
      take: 1,
    });

    if (!user) {
      throw new UnauthorizedException('로그인에 실패하였습니다.');
    }

    return user;
  }

  userLogin(user: User) {
    const token = this.jwtService.sign({ id: user.id });
    return { token };
  }
}
