import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Permission } from "./schemas/permission.schema";
import { Model } from "mongoose";

@Injectable()
export class PermissionRepository {
    constructor(
        @InjectModel(Permission.name) private readonly permissionModel: Model<Permission>
    ) { }

    async createPermission(permission: Permission) {
        return this.permissionModel.create(permission);
    }

    async getPermissions() {
        return this.permissionModel.aggregate([
            {
                $group: {
                    _id: "$permission_module",
                    permissions: {
                        $push: {
                            permission_name: "$permission_name",
                            permission_apiPath: "$permission_apiPath",
                            permission_method: "$permission_method",
                            createdAt: "$createdAt",
                            updatedAt: "$updatedAt"
                        }
                    }
                }
            },
            {
                $sort: { _id: 1 } // Sắp xếp theo module name
            }
        ]);
    }

}