import { Global, Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { RatingsModule } from 'src/ratings/ratings.module';
import { CommentModule } from 'src/comment/comment.module';
@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    forwardRef(() => RatingsModule),
    forwardRef(() => CommentModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
