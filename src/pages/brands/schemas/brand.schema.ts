import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BrandDocument = Brand & Document;

@Schema()
export class Brand {
    @Prop({required: true, unique: true})
    uid: number;

    @Prop()
    image?: string;

    @Prop({required: true})
    name: string;

    @Prop({ default: new Date().toISOString() })
    createdAt?: Date;

    @Prop({ default: new Date().toISOString() })
    updatedAt?: Date;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);