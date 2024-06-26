import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Brand, BrandDocument } from './schemas/brand.schema';
import { Model } from 'mongoose';
import { generateUid } from 'src/shared/generate-uid';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<BrandDocument>){}
  
  async create(createBrandDto: CreateBrandDto) {
    const {name, image} = createBrandDto;
    const model : Brand = {
      uid: await generateUid(this.brandModel),
      name: name,
      image: image
    } 
    const result = new this.brandModel(model);
    return result.save();
  }

  async findAll() {
    return this.brandModel.find().exec();
  }

  async findOne(id: string) {
    return this.brandModel.findById(id).exec();
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    const result = this.brandModel.findByIdAndUpdate(id, updateBrandDto, {new: true}).exec();
    return result;
  }

  async remove(id: string) {
    try {
      const result = await this.brandModel.findByIdAndDelete(id).exec();
      if(!result){
        throw new NotFoundException('id not found');
      }
      return {message: 'Delete successful'};
    } catch (error) {
      throw error;
    }
  }
}
