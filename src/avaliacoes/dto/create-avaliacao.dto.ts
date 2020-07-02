import { IsNotEmpty, IsInt, IsEmpty, IsString, IsOptional } from 'class-validator'

export class CreateAvaliacaoDto {

  @IsNotEmpty()
  @IsInt()
  experienciaId: number;

  @IsOptional()
  @IsEmpty()
  @IsString()
  comentario: string | null;

  @IsNotEmpty()
  @IsInt()
  nota: number;

}