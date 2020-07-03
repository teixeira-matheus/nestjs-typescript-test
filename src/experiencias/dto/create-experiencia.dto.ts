import { IsNotEmpty, IsInt, IsNumber, IsDate } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateExperienciaDto {
  
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ type: Number, description: 'Store ID'})
  lojaId: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ type: Number, description: 'Employee ID'})
  colaboradorId: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ type: Number, description: 'Customer ID'})
  clienteId: number;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({ type: Date, description: 'Transaction date'})
  data: Date;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'Transaction value'})
  valor: number;

}