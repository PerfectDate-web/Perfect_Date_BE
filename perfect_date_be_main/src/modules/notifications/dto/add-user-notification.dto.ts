import { IsNotEmpty } from "class-validator";

export class AddUserNotificationDto {
    @IsNotEmpty()
    planId: string;

    @IsNotEmpty()
    userId: string;
}