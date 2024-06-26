import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateCategoryDto {
    @ApiProperty()
    @IsOptional()
    image?: string;

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsOptional()
    description?: string;
}
