import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderDocument } from './schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from 'src/pages/products/products.service';
@Injectable()
export class OrdersService {
  constructor( @InjectModel(Order.name) private orderModel: Model<OrderDocument>, private readonly ProductsService: ProductsService){}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const findProd = await this.ProductsService.findOne(createOrderDto.productId);
    if(!findProd){
      throw new NotFoundException('Product id not found')
    }
    const result = new this.orderModel(createOrderDto);
    return result.save();
  }

  async findAll(): Promise<Order[]> {
    const result = this.orderModel.find().populate('productId').exec();
    return result;
  }

  async findOne(id: string): Promise<Order> {
    const result = this.orderModel.findById(id).populate('productId').exec();
    return result;
  }

  // async findProd(): Promise<any> {
  //   const products = await this.ProductsService.findAll();
  //   return Promise.all(
  //     products.map(async (product:any) => {
  //       const orders = await this.orderModel.find({ productId: product._id.toString() }).populate('productId').exec();
  //       return { ...product.toObject(), orders };
  //     }),
  //   );
  // }

}
