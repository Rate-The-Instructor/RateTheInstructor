import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from '../schema/admin.schema';

@Injectable()
export class AdminService {
    constructor( @InjectModel("Admin") private adminModel : Model<Admin>){}
    async findAll():Promise<Admin[]>{
      try{

        return await this.adminModel.find();
      }
      catch (err){
        throw err;
      }

      }
    async findOne(id:string):Promise<Admin>{
        try{
          return await this.adminModel.findOne({_id:id});
        }
        catch (err){
          throw err
      }
      }

    async create(admin:Admin):Promise<Admin>{
        try{
          const new_admin= new this.adminModel(admin);
          return await new_admin.save();
        }
        catch (err){
          throw err;
      }
      }
    async delete(id:string):Promise<Admin>{
        try{
          return await this.adminModel.findByIdAndDelete({_id:id})
        }
        catch (err){
          throw err;
      }
      }

    async update(id:string, admin:Admin):Promise<Admin>{
        try{
          return await this.adminModel.findByIdAndUpdate(id,admin,{new:true})
        }
        catch (err){
            throw err;
      }
      }

}
