import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import * as bcrypt from 'bcrypt'

export type UserDocument = User & Document;
 
@Schema()
export class User {
  @Prop({required: true, unique: true})
  username: string;

  @Prop({required: true})
  password: string;

  @Prop({required: true})
  fullname: string;

  @Prop({required: true, default: true})
  status: boolean;

  @Prop()
  email?: string;

  @Prop()
  tel?: string;

  @Prop({ default: new Date().toISOString() })
  createdAt?: Date;

  @Prop({ default: new Date().toISOString() })
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User).plugin(mongoosePaginate);

UserSchema.pre('save', async function (next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})