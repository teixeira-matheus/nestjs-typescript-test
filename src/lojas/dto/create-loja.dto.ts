import { IsNotEmpty, IsString, IsBoolean } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateLojaDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Store Name'})
  nome: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'Store status'})
  ativo: boolean;

}