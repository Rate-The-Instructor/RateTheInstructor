import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './controller/admin.controller';
import { AdminSchema } from './schema/admin.schema';
import { AdminService } from './service/admin.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name:"Admin",schema:AdminSchema}])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
