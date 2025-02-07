import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";

@Schema({
    timestamps: true,
})
export class Plan  {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ type: mongoose.Types.ObjectId, required: true, ref: 'User' })
    createdBy: Types.ObjectId; // 🔥 Dùng Types.ObjectId

    @Prop({
        type: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
        default: function () {
            return [this.createdBy]; // 🔥 Dùng this.createdBy vì nó là ObjectId
        },
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
