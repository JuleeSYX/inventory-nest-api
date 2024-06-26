import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model, Types } from 'mongoose';
import { generateUid } from 'src/shared/generate-uid';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>){}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { 
      name,
      sku,
      barcode,
      image,
      unit,
      color,
      size,
      categorie,
      brand,
      price,
      status,
      minimum,
      link,} = createProductDto;
    const model : Product = {
      uid: await generateUid(this.productModel),
      name,
      sku,
      barcode,
      image,
      unit: new Types.ObjectId(unit),
      color,
      size,
      categorie: new Types.ObjectId(categorie),
      brand: new Types.ObjectId(brand),
      price,
      description: name + ' ' + size + ' ' + color,
      status,
      minimum,
      link,
    } 
    const result = new this.productModel(model);
    return result.save();
  }

  async findAll(search: string, pagination: any): Promise<Product[]> {
    const result = this.productModel.aggregate(
      [
        {
          $lookup: {
            from: 'brands',
            localField: 'brand',
            foreignField: '_id',
            as: 'brand'
          }
        },
        {
          $unwind: '$brand'
        },
        {
          $lookup: {
            from: 'categories',
            localField: 'categorie',
            foreignField: '_id',
            as: 'categorie'
          }
        },
        {
          $unwind: '$categorie'
        },
        {
          $lookup: {
            from: 'units',
            localField: 'unit',
            foreignField: '_id',
            as: 'unit'
          }
        },
        {
          $unwind: '$unit'
        },
        {
          $match: {
            $or:[
              {'brand.name': {$regex: search, $options: 'i'}},
              {name: { $regex: search, $options: 'i' }}
            ]
          }
        }
      ]
    )
    return pagination
    // return this.productModel.find().populate(['unit', 'categorie', {
    //   path: 'brand',
    //   match: {name:{$regex: new RegExp(brandName, 'i')}},
    // }]).exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).populate(['unit', 'categorie', 'brand']).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const result = this.productModel.findByIdAndUpdate(id, updateProductDto, {new: true}).exec();
    return result;
  }

  async remove(id: string) {
    try {
      const result = await this.productModel.findByIdAndDelete(id).exec();
      if(!result){
        throw new NotFoundException('id not found');
      }
      return {message: 'Delete successful'};
    } catch (error) {
      throw error;
    }
  }
}
