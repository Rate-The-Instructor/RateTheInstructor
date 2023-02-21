import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Course } from 'src/courses/schemas/course.schema';

@Schema({ timestamps: true })
export class Department {
  @Prop({ required: true })
  departmentName: string;

  @Prop({ type: [mongoose.Types.ObjectId], ref: 'Course' })
  courses: Course[];

  @Prop({ type: [mongoose.Types.ObjectId], ref: 'Instructor' })
  instructors;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
