import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({
    timestamps: true,
})
export class Like {
    @Prop({ required: true, ref: 'Plan' })
    planId: Types.ObjectId;  // ID của kế hoạch được yêu thích

    @Prop({ required: true, ref: 'User' })
    userId: Types.ObjectId;  // ID của người đã like

}

export const LikeSchema = SchemaFactory.createForClass(Like);
LikeSchema.index({ planId: 1, userId: 1 }, { unique: true });