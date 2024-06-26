import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateMenuDto {
    @ApiProperty()
    @IsNotEmpty()
    icon: string;

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    url: string;

    @ApiProperty()
    @IsOptional()
    parentId?: string;

    @ApiProperty()
    @IsOptional()
    index?: number;
}
