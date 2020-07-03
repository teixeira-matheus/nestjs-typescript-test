import { IsNotEmpty, IsInt, IsString, IsOptional, Min, Max } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAvaliacaoDto {

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ type: Number, description: 'Transaction Id'})
  experienciaId: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Commentary'})
  comentario: string | null;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(10)
  @ApiProperty({ type: Number, description: 'Evaluation Rating'})
  nota: number;

}