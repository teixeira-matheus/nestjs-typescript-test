import { IsNotEmpty, IsInt, IsString, IsOptional, IsEmail, IsBoolean } from 'class-validator'


export class UpdateColaboradorDto {

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
  @IsEmail()
  email: string;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  ativo: boolean;

} 