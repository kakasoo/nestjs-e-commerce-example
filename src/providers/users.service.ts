import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/tables/user';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto) {
    return await this.usersRepository.save(dto);
  }

  async findOne(condition: Partial<User>) {
    const [user] = await this.usersRepository.find({
      where: condition,
      take: 1,
    });
    return user;
  }
}
