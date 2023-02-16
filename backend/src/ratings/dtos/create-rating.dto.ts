import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

type questionType = {
  question: string;
  answer: string;
};

export class CreateRatingDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  instructorId: string;

  @IsString()
  @IsNotEmpty()
  courseId: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsNumber()
  overallRating: number;

  @IsNumber()
  difficultyRating: number;

  @IsString()
  @IsNotEmpty()
  review: string;

  //   @ValidateNested()
  //   questions: [{ question: string; answer: string }];
}
