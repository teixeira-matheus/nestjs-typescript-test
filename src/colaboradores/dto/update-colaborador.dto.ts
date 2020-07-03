import { IsNotEmpty, IsInt, IsString, IsOptional, IsEmail, IsBoolean } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateColaboradorDto {

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  @ApiPropertyOptional({ type: String, description: 'Employee ID'})
  id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Employee name'})
  nome: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  @ApiPropertyOptional({ type: String, description: 'Employee E-mail'})
  email: string;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  @ApiPropertyOptional({ type: String, description: 'Employee user status'})
  ativo: boolean;

} 