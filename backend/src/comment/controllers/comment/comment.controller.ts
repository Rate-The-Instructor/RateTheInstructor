import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommentService } from '../../services/comment/comment.service';
import { CommentDto } from '../../dtos/create-comment.dto';
import { IComment } from 'src/comment/interface/comment.interface';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  async getAll(): Promise<IComment[]> {
    return this.commentService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<IComment> {
    return this.commentService.findById(id);
  }

  @Post()
  async create(@Body() comment: CommentDto): Promise<IComment> {
    return this.commentService.create(comment);
  }

  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() comment: CommentDto,
  ): Promise<IComment> {
    return await this.commentService.updateById(id, comment);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<IComment> {
    return this.commentService.deleteById(id);
  }

  @Delete()
  async deleteAll(filter) {
    return this.commentService.deleteAll(filter);
  }
}
