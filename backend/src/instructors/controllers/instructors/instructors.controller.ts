import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateInstructorDto } from 'src/instructors/dtos/create-instructorDto.dto';
import { InstructorsService } from 'src/instructors/services/instructors/instructors.service';

@Controller('instructors')
export class InstructorsController {
  constructor(private readonly instructorsService: InstructorsService) {}

  @Post()
  createInstructors(@Body() instructorDto: CreateInstructorDto) {
    return this.instructorsService.createInstructors(instructorDto);
  }

  @Get()
  getAllInstructors() {
    return this.instructorsService.getAllInstructors();
  }

  @Get(':id')
  getInstructor(@Param('id') id: string) {
    return this.instructorsService.getInstructor(id);
  }

  @Patch(':id')
  updateInstructor(@Param('id') id: string, @Body() updateInstructorDto) {
    return this.instructorsService.updateInstructor(id, updateInstructorDto);
  }

  @Delete(':id')
  deleteInstructor(@Param('id') id: string) {
    return this.instructorsService.deleteInstructor(id);
  }
}
