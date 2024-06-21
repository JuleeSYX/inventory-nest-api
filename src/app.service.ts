import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!, Welcome to in the world';
  }
  getTest(): string {
    return 'Oh..! I am testing.';
  }
}
