import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  authenticate(@Body() auth: User) {
    return this.authService.signIn(auth.username, auth.password);
  }
}
