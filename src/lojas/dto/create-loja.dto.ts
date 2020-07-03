import { IsNotEmpty, IsString, IsBoolean } from 'class-validator'

export class CreateLojaDto {

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsBoolean()
  ativo: boolean;

}