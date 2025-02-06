import { Prop, Schema } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema(
    {
        timestamps: true,
    }
)
export class Plan {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    createdBy: string;  // Chứa ID của người tạo kế hoạch

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    })
    participants: mongoose.Schema.Types.ObjectId[];

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }]
    })
    activities: mongoose.Schema.Types.ObjectId[];

    @Prop({ default: false })
    isPublic: boolean;

    @Prop()
    sharedLink: string;
}
