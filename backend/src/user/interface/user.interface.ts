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
  courses: string[];
  ratings: string[];
  createdAt: Date;
  updatedAt: Date;
}
