import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNotificationDto {

    @IsNotEmpty()
    userId: string[];

    @IsNotEmpty()
    planId: string;

    @IsString()
    @IsNotEmpty()
    message:string  
   
    @IsNotEmpty()
    scheduledAt: string;

    @IsOptional()
    options: Object
}


