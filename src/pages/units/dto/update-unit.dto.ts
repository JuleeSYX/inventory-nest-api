import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
export class UpdateUnitDto {
    @ApiProperty()
    @IsOptional()
    name?: string;

    @ApiProperty()
    @IsOptional()
    value?: number;
}
