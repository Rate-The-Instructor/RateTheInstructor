import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInstructorDto } from 'src/instructors/dtos/create-instructorDto.dto';
import { IInstructor } from 'src/instructors/interfaces/instructors.interface';

@Injectable()
export class InstructorsService {
  constructor(
    @InjectModel('Instructor') private instructorModel: Model<IInstructor>,
  ) {}

  async createInstructors(
    instructorDto: CreateInstructorDto,
  ): Promise<IInstructor> {
    let instructor: IInstructor;
    try {
      instructor = await this.instructorModel.create(instructorDto);
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
      instructor = await this.instructorModel.findOne({ id });
    } catch (err) {
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
      const updatedRating = await this.instructorModel
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
    } catch (err) {
      throw err;
    }
    return deletedInstructor;
  }
}
