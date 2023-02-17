import { Document } from 'mongoose';

export interface IDepartment extends Document {
  departmentID: string;
  departmentName: string;
  course: string;
  instructor: string;
}
