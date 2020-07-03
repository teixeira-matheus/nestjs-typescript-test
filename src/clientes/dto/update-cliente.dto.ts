import { IsNotEmpty, IsInt, IsString, IsOptional, IsEmail, IsBoolean, Matches } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger';

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

export class UpdateClienteDto {

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  @ApiPropertyOptional({ type: String, description: 'Client ID'})
  id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Matches(cpfRegex)
  @ApiPropertyOptional({ type: String, description: 'Client CPF'})
  cpf: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Client Name'})
  nome: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  @ApiPropertyOptional({ type: String, description: 'Client E-mail'})
  email: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  @ApiPropertyOptional({ type: Number, description: 'Client telephone number'})
  telefone: number;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  @ApiPropertyOptional({ type: Boolean, description: 'Client user status'})
  ativo: boolean;

} 