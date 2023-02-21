import {
  BadRequestException,
  Inject,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';

import { InstructorsService } from 'src/instructors/services/instructors/instructors.service';

import { UserService } from 'src/user/service/user.service';
import { CreateRatingDto } from '../dtos/create-rating.dto';

@Injectable()
export class RatingValidation implements PipeTransform {
  constructor(
    @Inject(forwardRef(() => InstructorsService))
    private readonly instructorService: InstructorsService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async transform(rating: CreateRatingDto) {
    try {
      const user = await this.userService.findOne(rating.userId);
      const instructor = await this.instructorService.getInstructor(
        rating.instructorId,
      );

      if (user.department.toString() !== instructor.department.toString()) {
        throw new BadRequestException(
          'Student and Instructor Can not be in Different Department',
        );
      }
      return rating;
    } catch (err) {
      throw err;
    }
  }
}
