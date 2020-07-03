import { IsNotEmpty, IsInt, IsDate, IsOptional, IsNumber } from 'class-validator'

export class UpdateExperienciaDto {

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  lojaId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  colaboradorId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  clienteId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  data: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  valor: number;

} 