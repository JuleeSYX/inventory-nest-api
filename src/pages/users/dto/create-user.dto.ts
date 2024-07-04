import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    username: string;
  
    @ApiProperty()
    @IsNotEmpty()
    password: string;
  
    @ApiProperty()
    @IsNotEmpty()
    fullname: string;

    @ApiProperty()
    @IsOptional()
    status?: boolean;
  
    @ApiProperty()
    @IsOptional()
    email?: string;
  
    @ApiProperty()
    @IsOptional()
    tel?: string;
}
