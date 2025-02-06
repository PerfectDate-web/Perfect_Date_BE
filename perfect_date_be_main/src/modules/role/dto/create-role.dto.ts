import { IsNotEmpty } from "class-validator";

export class CreateRoleDto {

    @IsNotEmpty({ message: 'Role name is required' })
    role_name: string;

    @IsNotEmpty({ message: 'Role description is required' })
    role_description: string;

    @IsNotEmpty({ message: 'Role isActive is required' })
    role_isActive: boolean;

    @IsNotEmpty({ message: 'Role permissions is required' })
    role_permissions: string[];
}
