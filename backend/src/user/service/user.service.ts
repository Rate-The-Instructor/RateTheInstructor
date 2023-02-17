import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../interface/user.interface';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}
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
      return await this.userModel.findOne({ username }, { password: 0 });
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
      return await this.userModel.findByIdAndDelete(id, { password: 0 });
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
}
