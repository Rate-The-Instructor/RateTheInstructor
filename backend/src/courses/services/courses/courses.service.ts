import { Injectable, NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from 'src/courses/dtos/create-courseDto.dto';
import { UpdateCourseDto } from 'src/courses/dtos/update-courseDto';
import { ICourse } from 'src/courses/interfaces/course.interface';
import { Course } from 'src/courses/schemas/course.schema';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<ICourse>) {}

  async getCourses(): Promise<ICourse[]> {
    let courses: ICourse[];
    try {
      courses = await this.courseModel.find();
    } catch (err) {
      throw err;
    }
    if (!courses) {
      throw new NotFoundException('Courses Not Found');
    }
    return courses;
  }
  async createCourse(courseDto: CreateCourseDto): Promise<ICourse> {
    const course = new this.courseModel(courseDto);
    let savedCourse: ICourse;
    try {
      savedCourse = await course.save();
    } catch (err) {
      throw err;
    }

    if (!savedCourse) {
      throw new BadRequestException("Course can't be created");
    }
    return savedCourse;
  }

  async updateCourse(
    id: string,
    updateCourseDto: UpdateCourseDto,
  ): Promise<ICourse> {
    let updatedcourse: ICourse;
    try {
      updatedcourse = await this.courseModel.findByIdAndUpdate(
        { id },
        { updateCourseDto },
        { new: true },
      );
    } catch (err) {
      throw err;
    }
    if (!updatedcourse) {
      throw new NotFoundException('course not found');
    }
    return updatedcourse;
  }
  async deleteCourse(id: string): Promise<ICourse> {
    let deletedCourse: ICourse;
    try {
      deletedCourse = await this.courseModel.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
    if (!deletedCourse) {
      throw new NotFoundException('Course Not Found');
    }
    return deletedCourse;
  }
  async getUserById(id: string): Promise<ICourse> {
    let course: ICourse;
    try {
      course = await this.courseModel.findById(id);
    } catch (err) {
      throw err;
    }
    if (!course) {
      throw new NotFoundException('Course Not Found');
    }
    return course;
  }
}
