import { Document, Types } from 'mongoose';

export interface IReport extends Document {
  reporterId: Types.ObjectId;
  reviewId: Types.ObjectId;
  message: String;
}
