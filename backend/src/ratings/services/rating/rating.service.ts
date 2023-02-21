import {
  Injectable,
  NotFoundException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InstructorsService } from 'src/instructors/services/instructors/instructors.service';
import { IRating } from 'src/ratings/interfaces/rating.interface';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class RatingService {
  constructor(
    @InjectModel('Rating') private ratingModel: Model<IRating>,
    @Inject(forwardRef(() => InstructorsService))
    private instructorService: InstructorsService,
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {}

  async getById(id: string): Promise<IRating> {
    try {
      const rating = await this.ratingModel
        .findById(id)
        .populate('courseId')
        .exec();
      if (!rating) {
        throw new NotFoundException();
      }
      return rating;
    } catch (err) {
      throw err;
    }
  }
  async getByUserId(userId): Promise<IRating[]> {
    try {
      const rating = await this.ratingModel
        .find({ userId })
        .populate('courseId')
        .sort({ createdAt: 'desc' })
        .exec();
      if (!rating) {
        throw new NotFoundException();
      }
      return rating;
    } catch (err) {
      throw err;
    }
  }
  async getAllByInstructorId(instructorId): Promise<IRating[]> {
    try {
      const rating = await this.ratingModel
        .find({ instructorId })
        .populate('courseId')
        .sort({ createdAt: 'desc' })
        .exec();
      if (!rating) {
        throw new NotFoundException();
      }
      return rating;
    } catch (err) {
      throw err;
    }
  }
  async getByInstructorIdAndCourseId(
    instructorId,
    courseId,
  ): Promise<IRating[]> {
    try {
      const rating = await this.ratingModel
        .find({ instructorId, courseId })
        .populate('courses')
        .sort({ createdAt: 'desc' })
        .exec();
      if (!rating) {
        throw new NotFoundException();
      }
      return rating;
    } catch (err) {
      throw err;
    }
  }
  async getAllRating(): Promise<IRating[]> {
    try {
      const ratings = await this.ratingModel
        .find()
        .sort({ createdAt: 'desc' })
        .exec();
      return ratings;
    } catch (err) {
      throw err;
    }
  }

  async createRating(createDto): Promise<IRating> {
    try {
      const rating = await this.ratingModel.create(createDto);
      await this.instructorService.addRating(rating.instructorId, rating);
      await this.userService.addRating(createDto.userId, rating.id);
      return rating;
    } catch (err) {
      throw err;
    }
  }
  async updateRating(id, updateDto): Promise<IRating> {
    try {
      const updatedRating = await this.ratingModel
        .findByIdAndUpdate(id, updateDto, { new: true })
        .exec();

      return updatedRating;
    } catch (err) {
      throw err;
    }
  }
  async deleteRating(id): Promise<IRating> {
    try {
      const deletedRating = await this.ratingModel.findByIdAndDelete(id).exec();
      await this.userService.deleteRating(deletedRating.userId, id);
      await this.instructorService.deleteRating(
        deletedRating.instructorId,
        deletedRating,
      );
      return deletedRating;
    } catch (err) {
      throw err;
    }
  }

  async deleteMany(filter) {
    try {
      return await this.ratingModel.deleteMany(filter);
    } catch (err) {
      throw err;
    }
  }
}
