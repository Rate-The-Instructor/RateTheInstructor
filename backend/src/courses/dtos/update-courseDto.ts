import { CreateCourseDto } from './create-courseDto.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateCourseDto extends OmitType(CreateCourseDto, []) {}
