import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { RegisterDTO, LoginDTO } from '../auth/auth.dto';
import {UserService} from 'src/shared/user.service';
import { AuthGuard } from '@nestjs/passport';
import { Payload } from '../types/payload';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService, private authService: AuthService){}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    tempAuth(){
        return {auth:'works'}
    }

    @Post('login')
    async login(@Body() userDTO: LoginDTO){
        const user = await this.userService.findByLogin(userDTO);
        const payload: Payload = {
          email: user.email,
          commercant: user.commercant,
        };
        const token = await this.authService.signPayload(payload);
        return { user, token };
    }
    
    @Post('register')
    async register(@Body() userDTO: RegisterDTO){
        const user = await this.userService.create(userDTO);
        const payload: Payload = {
          email: user.email,
          commercant: user.commercant,
        };
        const token = await this.authService.signPayload(payload);
        return { user, token };
    }
}
