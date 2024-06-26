import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
export class UpdateCategoryDto {
    @ApiProperty()
    @IsOptional()
    image?: string;
    
    @ApiProperty()
    @IsOptional()
    name?: string;

    @ApiProperty()
    @IsOptional()
    description?: string;
}
