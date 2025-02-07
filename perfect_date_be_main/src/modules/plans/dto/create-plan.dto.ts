import { IsMongoId, IsNotEmpty } from "class-validator";

export class CreatePlanDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsMongoId()
    createdBy: string;

    @IsNotEmpty()
    startDate: string;
}
