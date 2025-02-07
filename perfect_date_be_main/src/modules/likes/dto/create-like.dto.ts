import { IsMongoId, IsNotEmpty } from "class-validator";

export class CreateLikeDto {
    @IsNotEmpty()
    @IsMongoId()
    planId: string;

    @IsNotEmpty()
    @IsMongoId()
    userId: string;

}
