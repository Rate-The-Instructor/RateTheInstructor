import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { ReportsModule } from './reports/reports.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CoursesModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'RateTheInstructor',
    }),
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
