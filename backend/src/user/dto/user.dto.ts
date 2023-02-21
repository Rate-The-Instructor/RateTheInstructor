import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly department: string;

  @IsNotEmpty()
  @IsString()
  readonly schoolId: string;

  @IsOptional()
  @IsString({ each: true })
  readonly courses: string[];

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly academicYear: number;

  @IsOptional()
  @IsString({ each: true })
  readonly ratings: string[];

  @IsOptional()
  @IsString({ each: true })
  readonly comments: string[];
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
