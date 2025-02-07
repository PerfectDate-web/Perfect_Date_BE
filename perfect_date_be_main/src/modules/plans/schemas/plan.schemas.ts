import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";
import { User } from "src/modules/user/schemas/user.schema";

@Schema({
    timestamps: true,
})
export class Plan  {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, ref: User.name })
    createdBy: Types.ObjectId; // 🔥 Dùng Types.ObjectId

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }],
    })
    participants: Types.ObjectId[]; // 🔥 Dùng Types.ObjectId[]

    @Prop({ unique: true, required: true })
    inviteCode: string;

    @Prop({ default: false })
    isPublic: boolean;

    @Prop({
        default: function () {
            return `https://myapp.com/plan/${this.inviteCode}`;
        },
    })
    sharedLink: string;

    @Prop({
        required: true,
    })
    startDate: Date;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
