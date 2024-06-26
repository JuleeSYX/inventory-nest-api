import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop({required: true, unique: true})
    uid: number;

    @Prop({default: null})
    image?: string;

    @Prop({required: true})
    name: string;

    @Prop({default: null})
    description?: string;

    @Prop({ default: new Date().toISOString() })
    createdAt?: Date;

    @Prop({ default: new Date().toISOString() })
    updatedAt?: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);