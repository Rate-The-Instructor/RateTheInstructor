import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export enum roles {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Department' })
  department;

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

  @Prop({ required: true, default: roles.USER, enum: roles })
  role: string;
}
export const UserSchema = SchemaFactory.createForClass(User);