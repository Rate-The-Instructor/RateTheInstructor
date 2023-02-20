import { Module, forwardRef } from '@nestjs/common';
import { RatingController } from './controllers/rating/rating.controller';
import { RatingService } from './services/rating/rating.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RatingSchema } from './schema/rating.schema';
import { InstructorsModule } from 'src/instructors/instructors.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Rating', schema: RatingSchema }]),
    forwardRef(() => InstructorsModule),
    forwardRef(() => UserModule),
  ],
  controllers: [RatingController],
  providers: [RatingService],
  exports: [RatingService],
})
export class RatingsModule {}
