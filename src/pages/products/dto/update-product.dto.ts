import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsMongoId, IsBoolean, IsOptional } from 'class-validator';
export class UpdateProductDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    name?: string;

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
    @IsOptional()
    @IsMongoId()
    categorie?: string;

    @ApiProperty()
    @IsOptional()
    @IsMongoId()
    brand?: string;

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

