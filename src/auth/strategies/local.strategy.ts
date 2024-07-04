import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new NotFoundException('The username or password is incorrect.');
    }
    if(!user.status){
      throw new BadRequestException('This username is not enabled.');
    }
    const result = {
      userId: user?._id,
      username: user?.username,
      fullname: user?.fullname,
      email: user?.email || null,
      tel: user?.tel || null
    }
    return result;
  }
}