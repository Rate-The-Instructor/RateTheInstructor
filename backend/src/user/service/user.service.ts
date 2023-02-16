import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../interface/user.interface';


@Injectable()
export class UserService {
    constructor( @InjectModel("User") private userModel : Model<User>){}
    async findAll():Promise<User[]>{
      try{

        return await this.userModel.find();
      }
      catch (err){
        throw err;
      }

      }
    async findOne(id:string):Promise<User>{
        try{
          return await this.userModel.findOne({_id:id});
        }
        catch (err){
          throw err
      }
      }

    async create(department:User):Promise<User>{
        try{
          const new_department= new this.userModel(department);
          return await new_department.save();
        }
        catch (err){
          throw err;
      }
      }
    async delete(id:string):Promise<User>{
        try{
          return await this.userModel.findByIdAndDelete({_id:id})
        }
        catch (err){
          throw err;
      }
      }

    async update(id:string, department:User):Promise<User>{
        try{
          return await this.userModel.findByIdAndUpdate(id,department,{new:true})
        }
        catch (err){
          throw err;
      }
      }
}
