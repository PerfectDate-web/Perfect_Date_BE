import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Role } from "./schemas/role.schema";

@Injectable()
export class RoleRepository{
    constructor(
        @InjectModel(Role.name) private readonly roleModel:Model<Role>
    ) {}

    async createRole(role:Role){
        return this.roleModel.create(role);
    }

    async getRoles(){
        return this.roleModel.find().lean();
    }

    async findOneByQuery(query: any){
        return this.roleModel.findOne(query)
        .populate('role_permissions','permission_apiPath permission_method -_id')
        .lean();
    }
}