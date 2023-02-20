import { Document } from 'mongoose';

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  username: string;
  department: string;
  schoolId: string;
  password: string;
  email: string;
  academicYear: number;
  ratings: string[];
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
}
