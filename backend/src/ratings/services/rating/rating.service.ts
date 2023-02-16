import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRating } from 'src/ratings/interfaces/rating.interface';

@Injectable()
export class RatingService {
  constructor(@InjectModel('rating') private ratingModel: Model<IRating>) {}

  async getById(id: string): Promise<IRating> {
    try {
      const rating = await this.ratingModel.findById(id).exec();
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
      const rating = await this.ratingModel.find({ userId }).exec();
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
      const rating = await this.ratingModel.find({ instructorId }).exec();
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
      const ratings = await this.ratingModel.find().exec();
      return ratings;
    } catch (err) {
      throw err;
    }
  }

  async createRating(createDto): Promise<IRating> {
    try {
      const rating = await this.ratingModel.create(createDto);
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
      return deletedRating;
    } catch (err) {
      throw err;
    }
  }
}
