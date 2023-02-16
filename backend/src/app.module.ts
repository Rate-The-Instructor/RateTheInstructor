import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InstructorsModule } from './instructors/instructors.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://amanuel:test1234@cluster0.8yo5agg.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'RateTheInstructor' },
    ),
    CoursesModule,
    InstructorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
