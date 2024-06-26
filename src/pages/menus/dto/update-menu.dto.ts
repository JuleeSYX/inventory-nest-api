import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
export class UpdateMenuDto {
    @ApiProperty()
    @IsOptional()
    icon?: string;

    @ApiProperty()
    @IsOptional()
    name?: string;

    @ApiProperty()
    @IsOptional()
    url?: string;

    @ApiProperty()
    @IsOptional()
    parentId?: string;

    @ApiProperty()
    @IsOptional()
    index?: number;
}

