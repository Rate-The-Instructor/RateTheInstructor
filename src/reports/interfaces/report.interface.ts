import { Document, Types } from 'mongoose';

export interface IReport extends Document {
  userId: Types.ObjectId;
  reviewId: Types.ObjectId;
  message: String;
}
