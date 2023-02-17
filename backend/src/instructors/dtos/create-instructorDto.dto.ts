import { IsNotEmpty, IsString } from 'class-validator';

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
  @IsNotEmpty()
  @IsString()
  courses: String;
}
