import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionRepository } from './permissions.repo';

@Injectable()
export class PermissionsService {
  constructor(
    private readonly permissionRepository: PermissionRepository
  ) {

  }

  async create(createPermissionDto: CreatePermissionDto) {
    return this.permissionRepository.createPermission(createPermissionDto);
  }

  async findAll() {
    return this.permissionRepository.getPermissions();
  }
}
