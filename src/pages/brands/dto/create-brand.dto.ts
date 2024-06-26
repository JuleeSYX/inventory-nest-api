import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateBrandDto {
    @ApiProperty()
    @IsOptional()
    image?: string;

    @ApiProperty()
    @IsNotEmpty()
    name: string;
}
