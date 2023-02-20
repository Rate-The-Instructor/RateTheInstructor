import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Course } from 'src/courses/schemas/course.schema';

@Schema({ timestamps: true })
export class Department {
  @Prop({ required: true })
  departmentName: string;

  @Prop({ type: [mongoose.Types.ObjectId], ref: 'Course', required: true })
  courses: Course[];

  @Prop({ type: [mongoose.Types.ObjectId], ref: 'Instructor', required: true })
  instructors;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
