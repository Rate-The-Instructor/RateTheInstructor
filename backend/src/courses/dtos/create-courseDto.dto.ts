import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator/types/decorator/decorators';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  code: string;
}
