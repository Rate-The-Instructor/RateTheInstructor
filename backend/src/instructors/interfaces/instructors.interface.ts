import { Document } from 'mongoose';

export interface IInstructor extends Document {
  firstName: string;
  lastName: string;
  courses: string[];
  totalRating: number;
  overallRating: number;
  difficultyRating: number;
  ratings: string[];
  comments: string[];
  department: string;
  ratingDistribution: object;
  tagCounter: [{ name: String; score: number }];
}
