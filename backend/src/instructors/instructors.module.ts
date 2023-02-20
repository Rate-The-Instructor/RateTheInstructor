import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InstructorsController } from './controllers/instructors/instructors.controller';
import { InstructorSchema } from './schemas/instructors.schema';
import { InstructorsService } from './services/instructors/instructors.service';
import { DepartmentModule } from 'src/department/department.module';
import { CoursesModule } from 'src/courses/courses.module';
import { RatingsModule } from 'src/ratings/ratings.module';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Instructor', schema: InstructorSchema },
    ]),
    forwardRef(() => DepartmentModule),
    forwardRef(() => CoursesModule),
    forwardRef(() => RatingsModule),
    forwardRef(() => CommentModule),
  ],
  controllers: [InstructorsController],
  providers: [InstructorsService],
  exports: [InstructorsService],
})
export class InstructorsModule {}
