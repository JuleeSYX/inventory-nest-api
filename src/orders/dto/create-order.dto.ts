import { IsString, IsNumber, IsNotEmpty, IsMongoId, IsOptional, Min } from 'class-validator';
export class CreateOrderDto {
    @IsNotEmpty()
    @IsMongoId()
    readonly productId: string;
  
    @IsNumber()
    readonly price: number;
  
    @IsNumber()
    @Min(1)
    readonly qty: number = 1;
  
    @IsString()
    @IsOptional()
    readonly remark?: string;
}
