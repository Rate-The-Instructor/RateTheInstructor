import { Admin } from '../schema/admin.schema';
import { AdminService } from '../service/admin.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { CreateAdminDto } from '../dto/admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param() Param) {
    return this.adminService.findOne(Param.id);
  }

  @Post()
  create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.create(createAdminDto);
  }

  @Delete(':id')
  delete(@Param() Param): Promise<Admin> {
    return this.adminService.delete(Param.id);
  }

  @Put(':id')
  update(
    @Param('id') id,
    @Body() updateAdmindto: CreateAdminDto,
  ): Promise<Admin> {
    return this.adminService.update(id, updateAdmindto);
  }
}
