import { Controller, Get } from '@nestjs/common';

@Controller('clientes')
export class ClientesController {
  @Get()
    index(): string {
      return "This action will return clientes";
    }    
}
