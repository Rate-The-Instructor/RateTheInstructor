import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
@Module({
  imports:[
  MongooseModule.forFeature([{name:"User",schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
