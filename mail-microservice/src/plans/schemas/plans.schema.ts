import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({
    collection: 'plans',  // Quan trọng: phải match với collection của perfect_date
    timestamps: true,
})
export class Plan extends Document {

}

export const PlanSchema = SchemaFactory.createForClass(Plan);