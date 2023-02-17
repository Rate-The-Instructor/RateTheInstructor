import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly firstname: string;

  @IsNotEmpty()
  @IsString()
  readonly lastname: string;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly department: string;

  @IsNotEmpty()
  @IsString()
  readonly schoolId: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly academicYear: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
