import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
  UsePipes,
} from '@nestjs/common';
import { CreateRatingDto } from 'src/ratings/dtos/create-rating.dto';
import { RatingValidation } from 'src/ratings/pipes/rating.validation.pipe';
import { RatingService } from 'src/ratings/services/rating/rating.service';

@Controller('rating')
export class RatingController {
  constructor(private ratingService: RatingService) {}

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.ratingService.getById(id);
  }
  @Get('/user/:id')
  async getByUserId(@Param('id') id: string) {
    return await this.ratingService.getByUserId(id);
  }

  @Get('/instructor/:id')
  async getAllByInstructorId(@Param('id') id: string) {
    return await this.ratingService.getAllByInstructorId(id);
  }

  @Get('/instructor/:Instructorid/:courseId')
  async getByInstructorIdAndCourseId(
    @Param('Instructorid') Instructorid: string,
    @Param('courseId') courseId: string,
  ) {
    return await this.ratingService.getByInstructorIdAndCourseId(
      Instructorid,
      courseId,
    );
  }

  @Get()
  async getAllRating() {
    return await this.ratingService.getAllRating();
  }

  @Post()
  @UsePipes(RatingValidation)
  async createRating(@Body() createDto: CreateRatingDto) {
    return await this.ratingService.createRating(createDto);
  }
  @Patch('/:id')
  async updateRating(@Param('id') id: string, @Body() updateDto) {
    return await this.ratingService.updateRating(id, updateDto);
  }
  @Delete('/:id')
  async deleteRating(@Param('id') id: string) {
    return await this.ratingService.deleteRating(id);
  }
}
