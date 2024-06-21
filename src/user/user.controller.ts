import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return [1, 2, 3, 4, 5];
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
    return 'Hello';
  }
  
}
