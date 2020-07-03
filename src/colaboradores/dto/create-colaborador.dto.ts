import { IsNotEmpty, IsString, IsEmail, IsBoolean } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateColaboradorDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Employee Name'})
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, description: 'Employee Email'})
  email: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'Employee user status'})
  ativo: boolean;
  
}