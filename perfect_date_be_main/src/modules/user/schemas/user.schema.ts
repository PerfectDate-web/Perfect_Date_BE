import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserSex } from "src/enums/user-sex.enum";


@Schema({
    timestamps: true,
})
export class User {
    @Prop({ required: true })
    user_email: string;

    @Prop({ required: true })
    user_name: string;

    @Prop({ default: null })
    user_avatar: string;

    @Prop({ default: false })
    user_verified: boolean;

    @Prop({ enum: UserSex, default: null })
    user_sex: string;

    @Prop({ default: null })
    user_birthdate: Date;

    @Prop({ required: true, ref: 'Role', default: "User" })
    user_role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);