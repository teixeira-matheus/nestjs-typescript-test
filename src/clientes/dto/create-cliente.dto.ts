import { IsNotEmpty, IsInt, IsString, IsEmail, IsBoolean, Matches } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

export class CreateClienteDto {

  @IsNotEmpty()
  @IsString()
  @Matches(cpfRegex)
  @ApiProperty({ type: String, description: 'Client CPF'})
  cpf: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Client Name'})
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, description: 'Client E-mail'})
  email: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ type: Number, description: 'Client telephone number'})
  telefone: number;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'Client user status'})
  ativo: boolean;
}