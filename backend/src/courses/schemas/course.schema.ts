import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Course {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  code: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
