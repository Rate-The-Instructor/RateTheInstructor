import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InstructorsController } from './controllers/instructors/instructors.controller';
import { InstructorSchema } from './schemas/instructors.schema';
import { InstructorsService } from './services/instructors/instructors.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Instructor', schema: InstructorSchema },
    ]),
  ],
  controllers: [InstructorsController],
  providers: [InstructorsService],
})
export class InstructorsModule {}
