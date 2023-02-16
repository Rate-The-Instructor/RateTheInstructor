import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true})
export class Department {
  @Prop({ required: true })
  departmentName: string;
  @Prop({ required: true })
  departmentID: string;
  @Prop({ required: true })
  courses: string;
  @Prop({ required: true })
  instructors: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);