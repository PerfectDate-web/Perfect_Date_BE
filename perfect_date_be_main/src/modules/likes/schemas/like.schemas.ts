import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true,
})
export class Like {
    @Prop({ required: true, ref: 'Plan' })
    planId: string;  // ID của kế hoạch được yêu thích

    @Prop({ required: true, ref: 'User' })
    userId: string;  // ID của người đã like

}

export const LikeSchema = SchemaFactory.createForClass(Like);
