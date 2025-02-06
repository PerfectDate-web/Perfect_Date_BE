import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true,
})
export class Like {
    @Prop({ required: true })
    planId: string;  // ID của kế hoạch được yêu thích

    @Prop({ required: true })
    userId: string;  // ID của người đã like

}

export const LikeSchema = SchemaFactory.createForClass(Like);
