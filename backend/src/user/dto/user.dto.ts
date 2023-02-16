import { IsEmail, IsNotEmpty, IsString , IsNumber } from 'class-validator';
export class CreateUserDto{ 
   @IsNotEmpty()
   @IsString()
   readonly  firstname: string;
   @IsNotEmpty()  
   @IsString()
   readonly  lastname: string;
   @IsNotEmpty()
   @IsString()
   readonly department:string;
   @IsNotEmpty()
   @IsString()
   readonly ID: string; 
   @IsNotEmpty()   
   @IsString()
   readonly  password:string; 
   @IsNotEmpty() 
   readonly  email:string; 
   @IsNotEmpty() 
   readonly acadamicYear: number;
}
