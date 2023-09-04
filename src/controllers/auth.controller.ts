import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    // call super to get reponse format
  }

  @Post('register')
  async register(@Body() registerBody: string): Promise<string> {
    return await this.authService.register();
  }
}
