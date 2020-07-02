import { IsNotEmpty, IsInt, IsString, IsOptional, IsBoolean } from 'class-validator'

export class UpdateLojaDto {

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  ativo: boolean;

} 