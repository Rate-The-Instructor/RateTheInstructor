import {
  Injectable,
  Inject,
  forwardRef,
  NotFoundException,
} from '@nestjs/common';
import { IDepartment } from '../interface/department.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDepartmentDto } from '../dto/department.dto';
import { CoursesService } from 'src/courses/services/courses/courses.service';
import { InstructorsService } from 'src/instructors/services/instructors/instructors.service';
@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel('Department')
    private readonly departmentModel: Model<IDepartment>,
    @Inject(forwardRef(() => CoursesService))
    private readonly courseService: CoursesService,
    @Inject(forwardRef(() => InstructorsService))
    private readonly instructorService: InstructorsService,
  ) {}

  async findAll(): Promise<IDepartment[]> {
    try {
      return await this.departmentModel
        .find()
        .populate('instructors')
        .populate('courses');
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: string): Promise<IDepartment> {
    try {
      const department = await this.departmentModel
        .findById(id)
        .populate('courses')
        .populate('instructors');

      if (!department) {
        console.log('department not found');
        throw new NotFoundException();
      }

      return department;
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
      await this.courseService.deleteMany({ department: id });
      await this.instructorService.deleteMany({ department: id });
      return await this.departmentModel
        .findByIdAndDelete(id)
        .populate('courses')
        .populate('instructors');
    } catch (err) {
      throw err;
    }
  }
  async update(
    id: string,
    department: CreateDepartmentDto,
  ): Promise<IDepartment> {
    try {
      return await this.departmentModel
        .findByIdAndUpdate(id, department, {
          new: true,
        })
        .populate('courses')
        .populate('instructors');
    } catch (err) {
      throw err;
    }
  }

  async addCourse(departmentId: string, courseId: string) {
    try {
      const department: IDepartment = await this.findOne(departmentId);
      if (department.courses) {
        department.courses.push(courseId);
      } else {
        department.courses = [courseId];
      }
      await department.save();
      return department;
    } catch (err) {
      throw err;
    }
  }
  async deleteCourse(departmentId: string, courseId: string) {
    try {
      const department: IDepartment = await this.findOne(departmentId);
      department.courses = department.courses.filter(
        (course) => courseId !== course,
      );
      await department.save();
      return department;
    } catch (err) {
      throw err;
    }
  }
  async addInstructor(departmentId: string, instructorId: string) {
    try {
      const department: IDepartment = await this.findOne(departmentId);
      if (department.instructors) {
        department.instructors.push(instructorId);
      } else {
        department.instructors = [instructorId];
      }
      await department.save();
      return department;
    } catch (err) {
      throw err;
    }
  }

  async deleteInstructor(departmentId: string, instructorId: string) {
    try {
      const department: IDepartment = await this.findOne(departmentId);
      department.instructors = department.instructors.filter(
        (instructor) => instructor !== instructorId,
      );
      department.save();
      return department;
    } catch (err) {
      throw err;
    }
  }
}
