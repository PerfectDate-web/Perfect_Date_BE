import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repo';
import { CreateUserDto } from './dto/request/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository
  ) { }

  async createUser(dto: CreateUserDto) {
    return this.userRepository.createUser(dto);
  }

  
}
