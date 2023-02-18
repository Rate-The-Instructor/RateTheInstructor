import {
  Injectable,
  NotFoundException,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateCourseDto } from 'src/courses/dtos/create-courseDto.dto';
import { UpdateCourseDto } from 'src/courses/dtos/update-courseDto';
import { ICourse } from 'src/courses/interfaces/course.interface';
import { Course } from 'src/courses/schemas/course.schema';
import { DepartmentService } from 'src/department/service/department.service';
import { IInstructor } from 'src/instructors/interfaces/instructors.interface';
import { InstructorsService } from 'src/instructors/services/instructors/instructors.service';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<ICourse>,
    @Inject(forwardRef(() => DepartmentService))
    private departmentService: DepartmentService,
    @Inject(forwardRef(() => InstructorsService))
    private instructorService: InstructorsService,
  ) {}

  async getCourses(): Promise<ICourse[]> {
    let courses: ICourse[];
    try {
      courses = await this.courseModel.find().populate('department');
    } catch (err) {
      throw err;
    }
    if (!courses) {
      console.log('courses are not found');
      throw new NotFoundException('Courses Not Found');
    }
    return courses;
  }
  async createCourse(courseDto: CreateCourseDto): Promise<ICourse> {
    const course = new this.courseModel(courseDto);
    let savedCourse: ICourse;
    try {
      savedCourse = await course.save();
      await this.departmentService.addCourse(
        courseDto.department,
        savedCourse.id,
      );
      if (savedCourse.instructors) {
        savedCourse.instructors.forEach(async (instructor) => {
          await this.instructorService.addCourse(instructor, savedCourse);
        });
      }
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
      updatedcourse = await this.courseModel
        .findByIdAndUpdate(id, updateCourseDto, { new: true })
        .populate('department');

      if (updatedcourse.instructors) {
        updatedcourse.instructors.forEach(async (instructor) => {
          await this.instructorService.addCourse(instructor, updatedcourse);
        });
      }
    } catch (err) {
      console.log('cant update source');
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
      deletedCourse = await this.courseModel
        .findByIdAndDelete(id)
        .populate('department')
        .populate('instructors')
        .exec();

      if (deletedCourse.instructors) {
        deletedCourse.instructors.forEach(async (instructorId) => {
          await this.instructorService.deleteCourse(
            instructorId,
            deletedCourse.id,
          );
        });
      }
      await this.departmentService.deleteCourse(
        deletedCourse.department,
        deletedCourse.id,
      );
    } catch (err) {
      console.log('cant delete course');
      throw err;
    }
    if (!deletedCourse) {
      throw new NotFoundException('Course Not Found');
    }
    return deletedCourse;
  }
  async getCourseById(id: string): Promise<ICourse> {
    let course: ICourse;
    try {
      course = await this.courseModel.findById(id).populate('department');
      if (!course) {
        throw new NotFoundException('Course Not Found');
      }
    } catch (err) {
      console.log('cant find course by id');
      throw err;
    }

    return course;
  }

  async deleteMany(filter) {
    try {
      return await this.courseModel.deleteMany(filter);
    } catch (err) {
      console.log('cant delete many courses');
      throw err;
    }
  }

  async addInstructor(courseId: string, instructor: IInstructor) {
    try {
      const course = await this.courseModel.findById(courseId);
      if (course.instructors) {
        course.instructors.push(instructor.id);
      } else {
        course.instructors = [instructor.id];
      }
      await course.save();
      return course;
    } catch (err) {
      console.log("can't add instructor");
      throw err;
    }
  }

  async deleteInstructor(courseId: string, instructorId: string) {
    try {
      const course: ICourse = await this.getCourseById(courseId);
      course.instructors = course.instructors.filter(
        (instructor) => instructor.toString() !== instructorId,
      );

      await course.save();
      return course;
    } catch (err) {
      throw err;
    }
  }
}
