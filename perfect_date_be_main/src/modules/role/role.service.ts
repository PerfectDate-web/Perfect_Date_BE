import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleRepository } from './role.repo';

@Injectable()
export class RoleService {
  constructor(
    private readonly roleRepository: RoleRepository
  ) { }
  async create(createRoleDto: CreateRoleDto) {
    return await this.roleRepository.createRole(createRoleDto);
  }

  async updatePermissions(roleId: string, permissions: string[]) {
    return await this.roleRepository.updatePermissions(roleId, permissions);
  }
}
