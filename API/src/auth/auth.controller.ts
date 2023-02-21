import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { RegisterDTO, LoginDTO } from '../auth/auth.dto';
import {UserService} from 'src/shared/user.service';
import { AuthGuard } from '@nestjs/passport';
import { Payload } from '../types/payload';
import { CommercantGuard } from 'src/guards/commercant.guard';
import { AuthService } from './auth.service';
import { User } from 'src/utilities/user.decorator';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService, private authService: AuthService){}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    tempAuth(@User() user){
        console.log(user)
        return {auth:'works', commercant: user.commercant, email: user.email}
    }

    // Get all users
    @Get('all')
    // @UseGuards(AuthGuard('jwt'))
    @UseGuards(AuthGuard('jwt'), CommercantGuard)
    async findAll(@User() user){
        console.log(user)
        return await this.userService.findAll();
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
