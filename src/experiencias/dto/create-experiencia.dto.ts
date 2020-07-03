import { IsNotEmpty, IsInt, IsNumber, IsDate } from 'class-validator'

export class CreateExperienciaDto {
  
  @IsNotEmpty()
  @IsInt()
  lojaId: number;

  @IsNotEmpty()
  @IsInt()
  colaboradorId: number;

  @IsNotEmpty()
  @IsInt()
  clienteId: number;

  @IsNotEmpty()
  @IsDate()
  data: Date;

  @IsNotEmpty()
  @IsNumber()
  valor: number;

}