import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { DepartmentController } from './controller/department.controller';
import { DepartmentSchema } from './schema/department.schema';
import { DepartmentService } from './service/department.service';


@Module({
    imports:[
      MongooseModule.forFeature([{name:"Department",schema:DepartmentSchema}])],
      controllers: [DepartmentController],
      providers: [DepartmentService]
})
export class DepartmentModule {}
