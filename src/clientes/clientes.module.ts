import { Module } from '@nestjs/common';
import { ClientesService } from './clientes/clientes.service';
import { ClientesController } from './clientes/clientes.controller';

@Module({
  providers: [ClientesService],
  controllers: [ClientesController]
})
export class ClientesModule {}
