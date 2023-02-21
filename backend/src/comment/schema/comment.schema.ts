import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Comment {
  @Prop({ type: String, required: true, ref: 'Instructor' })
  instructorId: string;
  @Prop({ type: String, required: true, ref: 'User' })
  userId: string;
  @Prop({ type: String, required: true })
  comment: string;
}
export const CommentSchema = SchemaFactory.createForClass(Comment);
