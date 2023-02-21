import { Optional } from '@nestjs/common';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateInstructorDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsString()
  department: string;

  @IsArray()
  @IsString({ each: true })
  courses: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  ratings: string[];
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  comments: string[];
}
