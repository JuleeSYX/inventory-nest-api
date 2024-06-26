import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { Model } from 'mongoose';
import { generateUid } from 'src/shared/generate-uid';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>){}
  
  async create(createCategoryDto: CreateCategoryDto) {
    const {name, description, image} = createCategoryDto;
    const model : Category = {
      uid: await generateUid(this.categoryModel),
      name: name,
      description: description,
      image: image
    } 
    const result = new this.categoryModel(model);
    return result.save();
  }

  async findAll() {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string) {
    return this.categoryModel.findById(id).exec();
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const result = this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {new: true}).exec();
    return result;
  }

  async remove(id: string) {
    try {
      const result = await this.categoryModel.findByIdAndDelete(id).exec();
      if(!result){
        throw new NotFoundException('id not found');
      }
      return {message: 'Delete successful'};
    } catch (error) {
      throw error;
    }
  }
}
