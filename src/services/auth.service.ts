import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // contructor
  async register() {
    return 'fn register';
  }
}
