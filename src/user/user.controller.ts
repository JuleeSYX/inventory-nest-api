import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}
  @Get()
  getUser() {
    const user = [
      {
        name: 'John Mackin',
        username: 'johnMK',
        password: '********'
      },
      {
        name: 'Khone Papa',
        username: 'johnMK',
        password: '123456789'
      }
    ]
    return this.userService.getUser(user);
  }

  @Get('/id')
  getUserbyId() {
    return [{ id: 1, name: 'Julee' }];
  }

  @Post()
  create(
    @Body('name') name: string,
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return { name, username, password };
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return `The ID is ${id}`;
  }
  
}
