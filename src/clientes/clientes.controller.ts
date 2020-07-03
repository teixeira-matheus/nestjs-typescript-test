import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Cliente } from './cliente.entity';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { 
  ApiCreatedResponse, 
  ApiOkResponse, 
  ApiBadRequestResponse, 
  ApiInternalServerErrorResponse,
  ApiBody 
} from '@nestjs/swagger';

@Controller('clientes')
export class ClientesController {
  
  constructor(private clientesService: ClientesService){}

  @Get()
  @ApiOkResponse({ description: 'Get all clients'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  index(): Promise<Cliente[]> {
    return this.clientesService.findAll();
  }    

  @Post()
  @ApiCreatedResponse({ description: 'Client added'})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiBody({type: CreateClienteDto})
  async create(@Body() clienteData: CreateClienteDto): Promise<Cliente> {
    return this.clientesService.create(clienteData);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Client updated'})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiBody({type: UpdateClienteDto})
  async update(@Param('id', ParseIntPipe) id:number, @Body() clienteData: UpdateClienteDto): Promise<UpdateResult> {
    clienteData.id = id;
    return this.clientesService.update(clienteData);
  }  

  @Delete(':id')
  @ApiOkResponse({ description: 'Client deleted '})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.clientesService.delete(id);
  }   

}
