import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Department } from 'src/department/schema/department.schema';

@Schema({ timestamps: true })
export class Course {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  code: string;
  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Department' })
  department: Department;

  @Prop({ type: [mongoose.Types.ObjectId], ref: 'Instructor' })
  instructors;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
