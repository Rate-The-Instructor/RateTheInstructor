import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentController } from './controllers/comment/comment.controller';
import { CommentService } from './services/comment/comment.service';
import { CommentSchema } from './schema/comment.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:'Comment', schema: CommentSchema }])],
  controllers: [CommentController],
  providers: [CommentService],
  exports:[CommentService]
})
export class CommentModule {}
