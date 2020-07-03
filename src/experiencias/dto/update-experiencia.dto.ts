import { IsNotEmpty, IsInt, IsDateString, IsOptional, IsNumber } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateExperienciaDto {

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  @ApiPropertyOptional({ type: Number, description: 'Transaction/Experience ID'})
  id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  @ApiPropertyOptional({ type: Number, description: 'Store ID'})
  lojaId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  @ApiPropertyOptional({ type: Number, description: 'Employee ID'})
  colaboradorId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  @ApiPropertyOptional({ type: Number, description: 'Customer ID'})
  clienteId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  @ApiPropertyOptional({ type: Date, description: 'Transaction date'})
  data: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @ApiPropertyOptional({ type: Number, description: 'Transaction value'})
  valor: number;

} 