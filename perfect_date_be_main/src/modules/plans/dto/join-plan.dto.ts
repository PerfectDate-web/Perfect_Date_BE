import { IsNotEmpty } from "class-validator";

export class JoinPlanDto {

    @IsNotEmpty()
    inviteCode: string;

    @IsNotEmpty()
    userId: string;
}