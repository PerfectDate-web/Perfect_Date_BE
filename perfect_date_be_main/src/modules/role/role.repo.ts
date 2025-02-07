import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Role } from "./schemas/role.schema";
import { CustomException } from "src/exception-handle/custom-exception";
import { ErrorCode } from "src/enums/error-code.enum";
import { CreateRoleDto } from "./dto/create-role.dto";

@Injectable()
export class RoleRepository {
    constructor(
        @InjectModel(Role.name) private readonly roleModel: Model<Role>
    ) { }

    async createRole(dto: CreateRoleDto) {
        return this.roleModel.create({
            role_name: dto.role_name,
            role_description: dto.role_description,
            role_permissions: dto.role_permissions,
        });
    }

    async getRoles() {
        return this.roleModel.find().lean();
    }

    async findOneByQuery(query: any) {
        return this.roleModel.findOne(query)
            .populate('role_permissions', 'permission_apiPath permission_method -_id')
            .lean();
    }

    async updatePermissions(roleId: string, permissions: string[]) {
        const role = await this.roleModel.findByIdAndUpdate(roleId, {
            role_permissions: permissions.map(permission => new mongoose.Types.ObjectId(permission))
        }, { new: true });
        return role;
    }

    
}