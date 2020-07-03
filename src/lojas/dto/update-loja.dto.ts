import { IsNotEmpty, IsInt, IsString, IsOptional, IsBoolean } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLojaDto {

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  @ApiPropertyOptional({ type: Number, description: 'Store Id'})
  id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Store Name'})
  nome: string;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  @ApiPropertyOptional({ type: Boolean, description: 'Store status'})
  ativo: boolean;

} 