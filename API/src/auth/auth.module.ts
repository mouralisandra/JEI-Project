import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {SharedModule} from 'src/shared/shared.module';
import {JwtStrategy} from './jwt.strategy'

@Module({
  controllers: [AuthController],
  imports: [SharedModule],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
