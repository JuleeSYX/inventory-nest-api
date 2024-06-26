import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UnitDocument = Unit & Document;

@Schema()
export class Unit {
    @Prop({required: true, unique: true})
    uid: number;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    value: number;

    @Prop({ default: new Date().toISOString() })
    createdAt?: Date;

    @Prop({ default: new Date().toISOString() })
    updatedAt?: Date;
}

export const UnitSchema = SchemaFactory.createForClass(Unit);