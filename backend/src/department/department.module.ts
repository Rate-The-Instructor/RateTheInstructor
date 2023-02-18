import { Global, Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { DepartmentController } from './controller/department.controller';
import { DepartmentSchema } from './schema/department.schema';
import { DepartmentService } from './service/department.service';
import { CoursesModule } from 'src/courses/courses.module';
import { InstructorsService } from 'src/instructors/services/instructors/instructors.service';
import { InstructorsModule } from 'src/instructors/instructors.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Department', schema: DepartmentSchema },
    ]),
    forwardRef(() => CoursesModule),
    forwardRef(() => InstructorsModule),
  ],
  controllers: [DepartmentController],
  providers: [DepartmentService],
  exports: [DepartmentService],
})
export class DepartmentModule {}
