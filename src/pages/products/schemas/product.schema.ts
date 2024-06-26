import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Unit } from 'src/pages/units/schemas/unit.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({required: true})
  name: string;
  @Prop({required: true, unique: true})
  uid: number;
  @Prop()
  sku?: string;
  @Prop()
  barcode?: string;
  @Prop()
  image?: string;
  @Prop({type: Types.ObjectId, ref: 'Unit', required: false, default: null})
  unit?: Types.ObjectId;
  @Prop()
  color?: string;
  @Prop()
  size?: string;
  @Prop({type: Types.ObjectId, ref: 'Category', required: true})
  categorie: Types.ObjectId;
  @Prop({type: Types.ObjectId, ref: 'Brand', required: true})
  brand: Types.ObjectId;
  @Prop({default: 0})
  price?: number;
  @Prop({required: true})
  description: string;
  @Prop({default: true})
  status?: boolean;
  @Prop()
  minimum?: number;
  @Prop()
  link?: string;
  @Prop({ default: new Date().toISOString() })
  createdAt?: Date;
  @Prop({ default: new Date().toISOString() })
  updatedAt?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);