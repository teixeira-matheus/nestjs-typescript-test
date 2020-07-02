import { IsNotEmpty, IsInt, IsString, IsOptional, IsEmail, IsBoolean, Matches } from 'class-validator'

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

export class UpdateClienteDto {

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Matches(cpfRegex)
  cpf: string;

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
  @IsInt()
  telefone: number;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  ativo: boolean;

} 