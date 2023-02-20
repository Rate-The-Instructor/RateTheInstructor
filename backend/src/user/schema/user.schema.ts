import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ type: mongoose.Types.ObjectId, required: true, ref: 'Department' })
  department: string;

  @Prop({ type: [mongoose.Types.ObjectId], ref: 'Course' })
  courses;
  @Prop({ required: true, unique: true })
  schoolId: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  academicYear: number;

  @Prop({ type: [mongoose.Types.ObjectId], ref: 'Rating' })
  ratings;
}
export const UserSchema = SchemaFactory.createForClass(User);
