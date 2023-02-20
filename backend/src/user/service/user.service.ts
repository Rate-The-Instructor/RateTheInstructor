import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../interface/user.interface';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import * as bcrypt from 'bcrypt';
import { RatingService } from 'src/ratings/services/rating/rating.service';
@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<IUser>,
    @Inject(forwardRef(() => RatingService))
    private readonly ratingService: RatingService,
  ) {}
  async findAll(): Promise<IUser[]> {
    try {
      return await this.userModel.find();
    } catch (err) {
      throw err;
    }
  }
  async findOne(id: string): Promise<IUser> {
    try {
      return await this.userModel.findOne({ _id: id }, { password: 0 });
    } catch (err) {
      throw err;
    }
  }

  async findByUsername(username: string): Promise<IUser> {
    try {
      return await this.userModel.findOne({ username });
    } catch (err) {
      throw err;
    }
  }

  async hashAndSave(user: IUser) {
    const salt = 10;
    let savedUser: IUser;
    let password: string = await bcrypt.hash(user.password, salt);
    user.password = password;
    savedUser = await user.save();
    return savedUser;
  }

  async create(createDto: CreateUserDto): Promise<IUser> {
    try {
      const user = new this.userModel(createDto);
      return await this.hashAndSave(user);
    } catch (err) {
      throw err;
    }
  }
  async delete(id: string): Promise<IUser> {
    try {
      const user = await this.userModel.findByIdAndDelete(id, { password: 0 });
      await this.ratingService.deleteMany({ userId: id });
      return user;
    } catch (err) {
      throw err;
    }
  }

  async update(id: string, updateDto: UpdateUserDto): Promise<IUser> {
    try {
      return await this.userModel.findByIdAndUpdate(id, updateDto, {
        new: true,
        password: 0,
      });
    } catch (err) {
      throw err;
    }
  }

  async addRating(userId: string, ratingId: string) {
    try {
      const user = await this.findOne(userId);

      if (user.ratings) {
        user.ratings.push(ratingId);
      } else {
        user.ratings = [ratingId];
      }
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }

  async deleteRating(userId: string, ratingId: string) {
    try {
      const user: IUser = await this.findOne(userId);
      user.ratings = user.ratings.filter(
        (rating) => rating.toString() !== ratingId,
      );
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }
}
