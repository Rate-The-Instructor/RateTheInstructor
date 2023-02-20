import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Comment{
    @Prop({required: true })
    teacherId:number
    @Prop({required: true })
    studentId:number
    @Prop({required:true})
    comment:string
    
}
export const CommentSchema=SchemaFactory.createForClass(Comment)