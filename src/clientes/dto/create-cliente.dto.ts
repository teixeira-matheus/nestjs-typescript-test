import { IsNotEmpty, IsInt, IsString, IsEmail, IsBoolean, Matches } from 'class-validator'

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

export class CreateClienteDto {

  @IsNotEmpty()
  @IsString()
  @Matches(cpfRegex)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsInt()
  telefone: number;

  @IsNotEmpty()
  @IsBoolean()
  ativo: boolean;
}