import { IsNotEmpty, IsInt, IsEmpty, IsString, IsOptional } from 'class-validator'

export class UpdateAvaliacaoDto {

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  experienciaId: number;

  @IsOptional()
  @IsEmpty()
  @IsString()
  comentario: string | null;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  nota: number;

} 