import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsNotEmpty, IsMongoId, IsOptional } from 'class-validator';
export class CreateProductDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    sku?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    barcode?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    image?: string;

    @ApiProperty()
    @IsOptional()
    @IsMongoId()
    unit?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    color?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    size?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsMongoId()
    categorie: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsMongoId()
    brand: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    price?: number;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    status?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    minimum?: number;
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    link?: string;
}
