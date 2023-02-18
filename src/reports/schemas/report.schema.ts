import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Report {
  @Prop({ required: true })
  //   {type:mongoose.Types.ObjectId, ref:'Student'}
  //   reporterId:Student
  userId: string;

  @Prop({ required: true })
  //   {type:mongoose.Types.ObjectId, ref:'Review'}
  //   reviewId:Review
  reviewId: string;

  @Prop({ required: true })
  message: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
