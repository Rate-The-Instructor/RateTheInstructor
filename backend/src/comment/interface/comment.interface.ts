import {Document} from 'mongoose';

export interface IComment extends Document {
    teacherId:number
    studentId:number
    comment:string
}