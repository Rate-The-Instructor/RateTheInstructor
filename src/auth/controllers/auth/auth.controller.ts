import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { CreateUserDto } from 'src/user/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginData) {
    return this.authService.login(loginData);
  }
  @Post('/signup')
  async signup(@Body() authDto: CreateUserDto) {
    return this.authService.signup(authDto);
  }
  @Post('/logout')
  async logout() {
    return this.authService.logout();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/protected')
  async protected(@Req() req: Request) {
    return req.user;
  }
}
