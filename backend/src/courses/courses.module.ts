import { Module, Global, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesController } from './controllers/courses/courses.controller';
import { Course, CourseSchema } from './schemas/course.schema';
import { CoursesService } from './services/courses/courses.service';
import { DepartmentModule } from 'src/department/department.module';
import { InstructorsModule } from 'src/instructors/instructors.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
    forwardRef(() => DepartmentModule),
    forwardRef(() => InstructorsModule),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService],
})
export class CoursesModule {}
