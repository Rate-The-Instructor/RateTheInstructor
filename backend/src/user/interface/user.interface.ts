import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  department: string;
  schoolId: string;
  password: string;
  email: string;
  academicYear: number;
  courses: string[];
  ratings: string[];
  comments: string[];
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
