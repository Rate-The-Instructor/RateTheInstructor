import { Injectable, forwardRef, Inject } from '@nestjs/common';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentService } from 'src/comment/services/comment/comment.service';
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
    @Inject(forwardRef(() => CommentService))
    private readonly commentService: CommentService,
  ) {}

  async createInstructors(
    instructorDto: CreateInstructorDto,
  ): Promise<IInstructor> {
    let instructor: IInstructor;
    try {
      instructor = new this.instructorModel(instructorDto);
      await instructor.save();
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
        .populate('department')
        .populate('ratings');
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
      await this.commentService.deleteAll({ instructorId: id });

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
      this.rateInstructor(rating, 'addRating');
      this.sortTags(instructor);
      await instructor.save();
      return instructor;
    } catch (err) {
      throw err;
    }
  }

  async addCourse(instructorId: string, course: ICourse) {
    try {
      const instructor = await this.getInstructor(instructorId);
      instructor.courses.push(course.id);
      await instructor.save();
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
      await instructor.save();
      return instructor;
    } catch (err) {
      throw err;
    }
  }

  async deleteRating(instructorId: string, deletedRating: IRating) {
    try {
      const instructor: IInstructor = await this.getInstructor(instructorId);
      instructor.ratings = instructor.ratings.filter(
        (rating) => rating.toString() !== deletedRating.id,
      );
      this.rateInstructor(deletedRating, 'deleteRating');
      this.sortTags(instructor);
      await instructor.save();
      return instructor;
    } catch (err) {
      throw err;
    }
  }
  async addComment(instructorId: string, commentId: string) {
    try {
      const instructor = await this.getInstructor(instructorId);

      if (instructor.comments) {
        instructor.comments.push(commentId);
      } else {
        instructor.comments = [commentId];
      }
      await instructor.save();
      return instructor;
    } catch (err) {
      throw err;
    }
  }
  async deleteComment(instructorId: string, commentId: string) {
    try {
      const instructor: IInstructor = await this.getInstructor(instructorId);
      instructor.comments = instructor.comments.filter(
        (comment) => comment.toString() !== commentId,
      );
      await instructor.save();
      return instructor;
    } catch (err) {
      throw err;
    }
  }
  async updateRating(
    rating: IRating,
    instructor: IInstructor,
    operationType: string,
  ) {
    let sign: number;
    sign = operationType == 'addRating' ? 1 : -1;

    let prevOverall = instructor.overallRating * instructor.totalRating;
    let prevDifficulty = instructor.difficultyRating * instructor.totalRating;

    instructor.totalRating += 1 * sign;
    await instructor.save();

    let newOverall =
      (prevOverall + rating.overallRating * sign) / instructor.totalRating;
    let newDifficulty =
      (prevDifficulty + rating.difficultyRating * sign) /
      instructor.totalRating;
    return { newOverall, newDifficulty };
  }
  updateTags(rating: IRating, instructor: IInstructor, operationType: string) {
    let tags = rating.tags;
    let sign: number;
    sign = operationType == 'addRating' ? 1 : -1;
    tags.forEach((tagName: string) => {
      instructor.tagCounter.forEach((element) => {
        if (element.name === tagName) {
          element.score += sign;
        }
      });
    });
  }
  sortTags(instructor: IInstructor) {
    let instructorTags = instructor.tagCounter;
    instructorTags.sort((a, b) => b.score - a.score);
    instructor.tagCounter = instructorTags;
  }
  async rateInstructor(rating: IRating, operationType: string) {
    let instructorId = rating.instructorId;
    let instructor: IInstructor;
    try {
      instructor = await this.getInstructor(instructorId);
    } catch (err) {
      throw err;
    }
    let { newOverall, newDifficulty } = await this.updateRating(
      rating,
      instructor,
      operationType,
    );
    instructor.overallRating = newOverall;
    instructor.difficultyRating = newDifficulty;
    // this.updateTags(rating, instructor, operationType);

    try {
      await instructor.save();
    } catch (err) {
      throw err;
    }
  }
}
