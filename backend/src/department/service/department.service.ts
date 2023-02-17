import { Injectable } from '@nestjs/common';
import { IDepartment } from '../interface/department.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDepartmentDto } from '../dto/department.dto';
@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel('Department')
    private readonly departmentModel: Model<IDepartment>,
  ) {}

  async findAll(): Promise<IDepartment[]> {
    try {
      return await this.departmentModel.find();
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: string): Promise<IDepartment> {
    try {
      return await this.departmentModel.findOne({ _id: id });
    } catch (err) {
      throw err;
    }
  }

  async create(department: CreateDepartmentDto): Promise<IDepartment> {
    try {
      const new_department = new this.departmentModel(department);
      return await new_department.save();
    } catch (err) {
      throw err;
    }
  }
  async delete(id: string): Promise<IDepartment> {
    try {
      return await this.departmentModel.findByIdAndDelete({ _id: id });
    } catch (err) {
      throw err;
    }
  }
  async update(
    id: string,
    department: CreateDepartmentDto,
  ): Promise<IDepartment> {
    try {
      return await this.departmentModel.findByIdAndUpdate(id, department, {
        new: true,
      });
    } catch (err) {
      throw err;
    }
  }
}
