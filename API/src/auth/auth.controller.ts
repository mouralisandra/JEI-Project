import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDTO, LoginDTO } from '../auth/auth.dto';
import {UserService} from 'src/shared/user.service';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService){}

    @Post('login')
    async login(@Body() userDTO: LoginDTO){
        return await this.userService.findByLogin(userDTO)
    }
    
    @Post('register')
    async register(@Body() userDTO: RegisterDTO){
        return await this.userService.create(userDTO)
    }
}
