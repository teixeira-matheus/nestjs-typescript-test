import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Cliente } from './cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente]),
  ],
  providers: [ClientesService],
  controllers: [ClientesController]
})
export class ClientesModule {}
