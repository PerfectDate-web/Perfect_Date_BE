import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repo';
import { CreateUserDto } from './dto/request/create-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository
  ) { }

  async createUser(dto: CreateUserDto) {
    return this.userRepository.createUser(dto);
  }

  async findById(id: string) {
    return this.userRepository.findById(id);
  }

  async addPartner(userId: string, partnerCode: string) {
    return this.userRepository.addPartner(userId, partnerCode);
  }

  async getPartner(userId: string) {
    return this.userRepository.getPartner(userId);
  }
}
