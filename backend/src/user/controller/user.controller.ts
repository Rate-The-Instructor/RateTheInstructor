import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { IUser } from '../interface/user.interface';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<IUser[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() Param) {
    return this.userService.findOne(Param.id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  delete(@Param() Param): Promise<IUser> {
    return this.userService.delete(Param.id);
  }

  @Patch(':id')
  update(
    @Param('id') id,
    @Body() updateUserdto: CreateUserDto,
  ): Promise<IUser> {
    return this.userService.update(id, updateUserdto);
  }
}
