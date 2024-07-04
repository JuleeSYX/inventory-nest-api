import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/pages/users/users.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUsername(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { userId: user.userId, username: user.username, fullname: user.fullname };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}