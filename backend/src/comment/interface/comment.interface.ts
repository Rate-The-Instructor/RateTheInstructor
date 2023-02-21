import { Document } from 'mongoose';

export interface IComment extends Document {
  instructorId: string;
  userId: string;
  comment: string;
}
