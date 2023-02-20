import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Comment } from 'src/comment/schema/comment.schema';
import { IComment } from 'src/comment/interface/comment.interface'; 


@Injectable()
export class CommentService {
    constructor(@InjectModel(Comment.name) private rateModel:mongoose.Model<Comment>){}

    async findAll():Promise<IComment>{
        const reactions = await this.rateModel.find()
        return reactions
    }

    async findById(id:string):Promise<IComment>{
        const res= await this.rateModel.findById(id)
        return res
    }

    async create(comment:Comment):Promise<IComment>{
       const res= await this.rateModel.create(comment)
        return res
    }
    async updateById(id:string,comment:Comment):Promise<IComment>{
        return await this.rateModel.findByIdAndUpdate(id,comment,{new:true,runValidators:true})
    }

    async deleteById(id:string):Promise<IComment>{
        return await this.rateModel.findByIdAndDelete(id)
    }
    async deleteAll():Promise<IComment>{
        return await this.rateModel.deleteMany()
    }
}