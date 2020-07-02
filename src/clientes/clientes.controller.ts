import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Cliente } from './cliente.entity';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  
  constructor(private clientesService: ClientesService){}

  @Get()
  index(): Promise<Cliente[]> {
    return this.clientesService.findAll();
  }    

  @Post()
  async create(@Body() clienteData: CreateClienteDto): Promise<Cliente> {
    return this.clientesService.create(clienteData);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id:number, @Body() clienteData: UpdateClienteDto): Promise<UpdateResult> {
    clienteData.id = id;
    return this.clientesService.update(clienteData);
  }  

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.clientesService.delete(id);
  }   

}
