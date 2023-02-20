import { Document } from 'mongoose';

export interface ICourse extends Document {
  name: string;
  code: string;
  department: string;
  instructors: string[];
}
