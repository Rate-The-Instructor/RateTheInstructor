import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateDepartmentDto{
    @IsNotEmpty()
    readonly departmentID:string;
    @IsNotEmpty()
    readonly departmentName:string;
    @IsNotEmpty()
    readonly course:string;
    @IsNotEmpty()
    readonly instructor:string;
}