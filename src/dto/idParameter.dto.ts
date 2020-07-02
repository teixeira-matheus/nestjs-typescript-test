import { IsNotEmpty, IsInt } from 'class-validator'

export class IdParameterDto {

  @IsNotEmpty()
  @IsInt()
  id: number;

}