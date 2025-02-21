import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repo';
import { CreateUserDto } from './dto/request/create-user.dto';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { UtilsService } from 'src/utils/utils.service';
import { UploadService } from '../upload/upload.service';
import { ErrorCode } from 'src/enums/error-code.enum';
import { CustomException } from 'src/exception-handle/custom-exception';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private uploadService: UploadService
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

  async updateUser(userId: string, file: Express.Multer.File, updateUserDto: UpdateUserDto) {
    let user = await this.userRepository.findById(userId);
    if (!user) {
      throw new CustomException(ErrorCode.NOT_FOUND);
    }
    if (file) {
      // Upload ảnh mới
      const uploadResult = await this.uploadService.uploadFile(file, 'users');

      // Xóa ảnh cũ khỏi Cloudinary (nếu cần)
      if (user.user_avatar) {
        const publicId = this.extractPublicIdFromUrl(user.user_avatar);
        await this.uploadService.deleteFile(publicId, "users");
      }

      // Gán URL ảnh mới
      updateUserDto.user_avatar = uploadResult.secure_url;
    }
    const objectAfterRemove = UtilsService.removeUndefinedAndNull(updateUserDto) as UpdateUserDto;
    return await this.userRepository.updateUser(userId, objectAfterRemove);
  }

  private extractPublicIdFromUrl(url: string): string {
    // Trích xuất public_id từ URL của Cloudinary
    const parts = url.split('/');
    const fileName = parts[parts.length - 1];
    return fileName.split('.')[0]; // Loại bỏ phần mở rộng (ví dụ: .jpg, .png)
  }

}


