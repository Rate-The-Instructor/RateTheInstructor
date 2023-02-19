import { Controller, Get, Post, Delete } from '@nestjs/common';
import { Body, Param, Patch } from '@nestjs/common/decorators';
import { CreateCourseDto } from 'src/courses/dtos/create-courseDto.dto';
import { UpdateCourseDto } from 'src/courses/dtos/update-courseDto';

import { CoursesService } from 'src/courses/services/courses/courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}
  @Get()
  getCourses() {
    return this.courseService.getCourses();
  }

  @Post()
  createCourse(@Body() courseDto: CreateCourseDto) {
    return this.courseService.createCourse(courseDto);
  }
  @Patch(':id')
  updateCourse(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.courseService.updateCourse(id, updateCourseDto);
  }
  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.courseService.deleteCourse(id);
  }
  @Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.courseService.getCourseById(id);
  }
}
