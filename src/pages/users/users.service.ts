import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newCreate = new this.userModel(createUserDto);
    return newCreate.save();
  }

  async findAll():Promise<User[]> {
    const find = await this.userModel.find().select(['fullname', 'email', 'tel', 'createdAt']).exec();
    return find;
  }

  async findOne(id: string): Promise<User> {
    const find = await this.userModel.findById(id).select(['fullname', 'email', 'tel', 'createdAt']).exec();
    return find;
  }

  async findUsername(username: string): Promise<any> {
    const find = await this.userModel.findOne({username: username}).exec();
    return find;
  }
}
