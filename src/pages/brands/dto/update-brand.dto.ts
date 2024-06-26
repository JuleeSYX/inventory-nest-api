import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
export class UpdateBrandDto {
    @ApiProperty()
    @IsOptional()
    image?: string;

    @ApiProperty()
    @IsOptional()
    name?: string;
}