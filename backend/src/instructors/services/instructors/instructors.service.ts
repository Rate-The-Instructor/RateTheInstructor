import { Injectable, forwardRef, Inject } from '@nestjs/common';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICourse } from 'src/courses/interfaces/course.interface';
import { CoursesService } from 'src/courses/services/courses/courses.service';
import { DepartmentService } from 'src/department/service/department.service';
import { CreateInstructorDto } from 'src/instructors/dtos/create-instructorDto.dto';
import { IInstructor } from 'src/instructors/interfaces/instructors.interface';
import { IRating } from 'src/ratings/interfaces/rating.interface';
import { RatingService } from 'src/ratings/services/rating/rating.service';

@Injectable()
export class InstructorsService {
  constructor(
    @InjectModel('Instructor') private instructorModel: Model<IInstructor>,
    @Inject(forwardRef(() => DepartmentService))
    private readonly departmentService: DepartmentService,
    @Inject(forwardRef(() => CoursesService))
    private readonly courseService: CoursesService,
    @Inject(forwardRef(() => RatingService))
    private readonly ratingService: RatingService,
  ) {}

  async createInstructors(
    instructorDto: CreateInstructorDto,
  ): Promise<IInstructor> {
    let instructor: IInstructor;
    try {
      instructor = new this.instructorModel(instructorDto);
      instructor.save();
      await this.departmentService.addInstructor(
        instructorDto.department,
        instructor.id,
      );

      instructor.courses.forEach(async (course) => {
        await this.courseService.addInstructor(course, instructor);
      });
    } catch (err) {
      throw err;
    }
    if (!instructor) {
      throw new BadRequestException('Instructor Can not be Created');
    }
    return instructor;
  }

  async getAllInstructors(): Promise<IInstructor[]> {
    let instructors: IInstructor[];
    try {
      instructors = await this.instructorModel.find();
    } catch (err) {
      throw err;
    }
    if (!instructors) {
      return [];
    }
    return instructors;
  }

  async getInstructor(id: string): Promise<IInstructor> {
    let instructor: IInstructor;
    try {
      instructor = await this.instructorModel
        .findOne({ id })
        .populate('department');
    } catch (err) {
      console.log('instructor not found ');
      throw err;
    }

    if (!instructor) {
      throw new NotFoundException('Instructor not found');
    }
    return instructor;
  }

  async updateInstructor(id, updateDto): Promise<IInstructor> {
    let updatedInstructor: IInstructor;
    try {
      updatedInstructor = await this.instructorModel
        .findByIdAndUpdate(id, updateDto, { new: true })
        .exec();
    } catch (err) {
      throw err;
    }

    if (!updatedInstructor) {
      throw new BadRequestException("Instructor can't be updated");
    }
    return updatedInstructor;
  }

  async deleteInstructor(id): Promise<IInstructor> {
    let deletedInstructor;
    try {
      deletedInstructor = await this.instructorModel.findByIdAndDelete(id);

      await this.ratingService.deleteMany({
        instructorId: id,
      });

      if (deletedInstructor.courses) {
        deletedInstructor.courses.forEach(async (courseId) => {
          await this.courseService.deleteInstructor(
            courseId,
            deletedInstructor.id,
          );
        });
      }

      await this.departmentService.deleteInstructor(
        deletedInstructor.department,
        deletedInstructor.id,
      );
    } catch (err) {
      throw err;
    }
    return deletedInstructor;
  }

  async deleteMany(filter) {
    try {
      return await this.instructorModel.deleteMany(filter);
    } catch (err) {
      throw err;
    }
  }

  async addRating(instructorId: string, rating: IRating) {
    try {
      const instructor = await this.getInstructor(instructorId);
      instructor.ratings.push(rating.id);
      instructor.save();
      return instructor;
    } catch (err) {
      throw err;
    }
  }
  async addCourse(instructorId: string, course: ICourse) {
    try {
      const instructor = await this.getInstructor(instructorId);
      instructor.courses.push(course.id);
      instructor.save();
      return instructor;
    } catch (err) {
      throw err;
    }
  }

  async deleteCourse(instructorId: string, courseId: string) {
    try {
      const instructor: IInstructor = await this.getInstructor(instructorId);
      instructor.courses = instructor.courses.filter(
        (course) => course.toString() !== courseId,
      );
      instructor.save();
      return instructor;
    } catch (err) {
      throw err;
    }
  }

  async deleteRating(instructorId: string, ratingId: string) {
    try {
      const instructor: IInstructor = await this.getInstructor(instructorId);
      instructor.ratings = instructor.ratings.filter(
        (rating) => rating.toString() !== ratingId,
      );
      instructor.save();
      return instructor;
    } catch (err) {
      throw err;
    }
  }
}
