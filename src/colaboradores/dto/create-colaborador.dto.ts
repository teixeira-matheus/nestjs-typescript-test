import { IsNotEmpty, IsString, IsEmail, IsBoolean } from 'class-validator'

export class CreateColaboradorDto {

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsBoolean()
  ativo: boolean;
  
}