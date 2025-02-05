import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from 'src/guards/google.guard';
import { User } from 'src/decorators/user-infor.decorator';
import { UserInterface } from '../user/dto/response/user.interface';
import { Public } from 'src/decorators/public.decorator';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Get("google/login")
  @UseGuards(GoogleAuthGuard)
  @Public()
  async googleLogin(){
    // return this.authService.googleLogin(req);
  }

  @Get("google/callback")
  @UseGuards(GoogleAuthGuard)
  async googleCallback(@User() user:UserInterface,@Res({passthrough:true}) res:Response){
    return this.authService.login(user,res);
  }
}
