import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
  timestamps: true,
})
export class Activity extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  location: string;

  @Prop()
  notes: string;

  @Prop({ required: true })
  order: number;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
