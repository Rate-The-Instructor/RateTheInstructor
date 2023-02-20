import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true})
export class Admin {
  @Prop({ required: true })
  firstname: string;
  @Prop({ required: true })
  lastname: string;
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true , default:false})
  status: boolean;
  @Prop({ required: true })
  role: string;
  @Prop({ required: true })
  password: string;
}
export const AdminSchema = SchemaFactory.createForClass(Admin);
