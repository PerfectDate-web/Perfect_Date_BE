import { Optional } from "@nestjs/common";
import { IsNotEmpty } from "class-validator";

export class JoinPlanDto {

    @IsNotEmpty()
    inviteCode: string;

    @Optional()
    userId: string;
}