export interface InstructorInterface {
  courses: string[];
  department: string;
  difficultyRating: number;
  firstName: string;
  lastName: string;
  overallRating: number;
  ratings: string[];
  ratingDistribution: object;
  totalRating: number;
  tagCounter: [{ name: String; score: number }];
}
