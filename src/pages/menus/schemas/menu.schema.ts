import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
    @Prop({required: true, unique: true})
    uid: number;

    @Prop({required: true})
    icon: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    url: string;

    @Prop()
    parentId?: string;

    @Prop({default: 0})
    index?: number;

    @Prop({ default: new Date().toISOString() })
    createdAt?: Date;

    @Prop({ default: new Date().toISOString() })
    updatedAt?: Date;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);