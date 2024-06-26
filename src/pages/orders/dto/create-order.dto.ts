import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsMongoId, IsOptional, Min } from 'class-validator';
export class CreateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsMongoId()
    readonly productId: string;
  
    @ApiProperty()
    @IsNumber()
    readonly price: number;
  
    @ApiProperty()
    @IsNumber()
    @Min(1)
    readonly qty: number = 1;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly remark?: string;
}
