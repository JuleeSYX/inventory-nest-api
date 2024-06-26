import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Unit, UnitDocument } from './schemas/unit.schema';
import { Model } from 'mongoose';
import { generateUid } from 'src/shared/generate-uid';

@Injectable()
export class UnitsService {
  constructor(@InjectModel(Unit.name) private unitModel: Model<UnitDocument>){}
  async create(createUnitDto: CreateUnitDto):Promise<Unit> {
    const {name, value} = createUnitDto;
    const model : Unit = {
      uid: await generateUid(this.unitModel),
      name: name,
      value: value
    } 
    const result = new this.unitModel(model);
    return result.save();
  }

  async findAll():Promise<Unit[]> {
    return this.unitModel.find().exec();
  }

  async findOne(id: string):Promise<Unit> {
    return this.unitModel.findById(id).exec();
  }

  async update(id: string, updateUnitDto: UpdateUnitDto):Promise<Unit> {
    const result = this.unitModel.findByIdAndUpdate(id, updateUnitDto, {new: true}).exec();
    return result;
  }

  async remove(id: string) {
    try {
      const result = await this.unitModel.findByIdAndDelete(id).exec();
      if(!result){
        throw new NotFoundException('id not found');
      }
      return {message: 'Delete successful'};
    } catch (error) {
      throw error;
    }
  }
}
