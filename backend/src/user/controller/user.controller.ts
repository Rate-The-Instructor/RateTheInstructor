import { Controller ,Post , Body, Get ,Delete ,Param , Put} from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { User } from '../interface/user.interface';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor( private readonly userService:UserService){}

    @Get()
    findAll():Promise<User[]>{
        return this.userService.findAll();
    }

    @Get(":id")
    findOne(@Param() Param){
        return this.userService.findOne(Param.id);
        
    }

    @Post()
    create(@Body() createUserDto:CreateUserDto ):Promise<User>{
        return this.userService.create(createUserDto);
       
    }

    @Delete(":id")
    delete(@Param() Param):Promise<User>{
        return this.userService.delete(Param.id);
    }
    
    @Put(":id")
    update(@Param("id") id , @Body() updateUserdto:CreateUserDto):Promise<User>{
            return this.userService.update(id,updateUserdto);
    }
}
