import { CreateCourseDto } from './create-courseDto.dto';
import { OmitType, PartialType } from '@nestjs/swagger';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
