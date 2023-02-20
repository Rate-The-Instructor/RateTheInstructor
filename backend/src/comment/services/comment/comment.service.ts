import {
  Injectable,
  NotFoundException,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Comment } from 'src/comment/schema/comment.schema';
import { IComment } from 'src/comment/interface/comment.interface';
import { CommentDto } from 'src/comment/dtos/create-comment.dto';
import { InstructorsService } from 'src/instructors/services/instructors/instructors.service';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: mongoose.Model<IComment>,
    @Inject(forwardRef(() => InstructorsService))
    private instructorService: InstructorsService,
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {}

  async findAll(): Promise<IComment[]> {
    let comments: IComment[];
    try {
      comments = await this.commentModel.find();
    } catch (err) {
      throw err;
    }

    return comments;
  }
  async findById(id: string): Promise<IComment> {
    let comment: IComment;
    try {
      comment = await this.commentModel.findById(id);
    } catch (err) {
      throw err;
    }
    if (!comment) {
      throw new NotFoundException('Comment Not Found');
    }

    return comment;
  }

  async create(comment: CommentDto): Promise<IComment> {
    try {
      const newComment = await this.commentModel.create(comment);
      await this.instructorService.addComment(
        comment.instructorId,
        newComment.id,
      );
      await this.userService.addComment(comment.userId, newComment.id);
      return newComment;
    } catch (err) {
      throw err;
    }
  }
  async deleteById(id): Promise<IComment> {
    try {
      const deletedComment = await this.commentModel
        .findByIdAndDelete(id)
        .exec();
      await this.userService.deleteComment(deletedComment.userId, id);
      await this.instructorService.deleteComment(
        deletedComment.instructorId,
        deletedComment.id,
      );
      return deletedComment;
    } catch (err) {
      throw err;
    }
  }
  async updateById(id: string, comment: CommentDto): Promise<IComment> {
    let updatedComment: IComment;
    try {
      updatedComment = await this.commentModel.findByIdAndUpdate(id, comment, {
        new: true,
      });
      return updatedComment;
    } catch (err) {
      throw err;
    }
  }
  async deleteAll(filter) {
    let deletedComments;
    try {
      deletedComments = await this.commentModel.deleteMany(filter);
      return deletedComments;
    } catch (err) {
      throw err;
    }
  }
}
