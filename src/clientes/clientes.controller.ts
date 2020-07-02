import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Cliente } from './cliente.entity';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  
  constructor(private clientesService: ClientesService){}

  @Get()
  index(): Promise<Cliente[]> {
    return this.clientesService.findAll();
  }    

  @Post()
  async create(@Body() clienteData: Cliente): Promise<Cliente> {
    return this.clientesService.create(clienteData);
  }

  @Put(':id')
  async update(@Param('id') id:string, @Body() clienteData: Cliente): Promise<UpdateResult> {
    clienteData.id = Number(id);
    return this.clientesService.update(clienteData);
  }  

  @Delete(':id')
  async delete(@Param('id') id:string): Promise<DeleteResult> {
    return this.clientesService.delete(Number(id));
  }   

}
