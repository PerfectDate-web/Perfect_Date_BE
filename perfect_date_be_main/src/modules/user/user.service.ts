import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repo';
import { CreateUserDto } from './dto/request/create-user.dto';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { UtilsService } from 'src/utils/utils.service';

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

  async updateUser(userId: string, updateUserDto: UpdateUserDto) {
    const objectAfterRemove = UtilsService.removeUndefinedAndNull(updateUserDto) as UpdateUserDto;
    
    return this.userRepository.updateUser(userId, objectAfterRemove);
  }

}
