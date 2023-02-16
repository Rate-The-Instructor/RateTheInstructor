import { Module } from '@nestjs/common';
import { RatingController } from './controllers/rating/rating.controller';
import { RatingService } from './services/rating/rating.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RatingSchema } from './schema/rating.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'rating', schema: RatingSchema }]),
  ],
  controllers: [RatingController],
  providers: [RatingService],
})
export class RatingsModule {}
