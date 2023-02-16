import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import {DepartmentService} from "../service/department.service"
import {Department} from "../interface/department.interface";
import {CreateDepartmentDto} from "../dto/department.dto";

@Controller('department')
export class DepartmentController 
{
    constructor(private readonly departmentService:DepartmentService){}

    @Get()
    findAll():Promise<Department[]>{
        return this.departmentService.findAll();
    }

    @Get(":id")
    findOne(@Param() Param){
        return this.departmentService.findOne(Param.id);
       
    }

    @Post()
    create(@Body() createDepartmentDto:CreateDepartmentDto ):Promise<Department>{
            return this.departmentService.create(createDepartmentDto);
    }

    @Delete(":id")
    delete(@Param() Param):Promise<Department>{
            return this.departmentService.delete(Param.id);
       
    }
    
    @Put(":id")
    update(@Param("id") id , @Body() updateDepartmentdto:CreateDepartmentDto):Promise<Department>{
            return this.departmentService.update(id,updateDepartmentdto);
       
    }

}
