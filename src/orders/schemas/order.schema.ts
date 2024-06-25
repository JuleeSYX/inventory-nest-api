import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({type: Types.ObjectId, ref: 'Product', required: true})
  productId: Types.ObjectId;

  @Prop({required: false, default: 0})
  price: number;

  @Prop({required: true})
  qty: number;

  @Prop()
  remark?: string;

  @Prop({ default: new Date().toISOString() })
  createdAt?: Date;

  @Prop({ default: new Date().toISOString() })
  updatedAt?: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);