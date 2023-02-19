import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
  Patch,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { IUser } from '../interface/user.interface';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<IUser[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param() Param) {
    return await this.userService.findOne(Param.id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return await this.userService.create(createUserDto);
  }

  @Delete(':id')
  async delete(@Param() Param): Promise<IUser> {
    return await this.userService.delete(Param.id);
  }

  @Patch(':id')
  async update(
    @Param('id') id,
    @Body() updateUserdto: CreateUserDto,
  ): Promise<IUser> {
    return this.userService.update(id, updateUserdto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('promote/:id')
  async promote(@Param('id') id: string) {
    await this.userService.promote(id);
  }

  @HttpCode(HttpStatus.OK)
  @Post('demote/:id')
  async demote(@Param('id') id: string) {
    await this.userService.demote(id);
  }
}
