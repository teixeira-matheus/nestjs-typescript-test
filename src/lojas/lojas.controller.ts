import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Loja } from './loja.entity';
import { LojasService } from './lojas.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { 
  ApiCreatedResponse, 
  ApiOkResponse, 
  ApiBadRequestResponse, 
  ApiInternalServerErrorResponse,
  ApiBody 
} from '@nestjs/swagger';

@Controller('lojas')
export class LojasController {

  constructor(private lojasService: LojasService){}

  @Get()
  @ApiOkResponse({ description: 'Get all stores'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  index(): Promise<Loja[]> {
    return this.lojasService.findAll();
  }    

  @Post()
  @ApiCreatedResponse({ description: 'Store added'})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiBody({type: CreateLojaDto})
  async create(@Body() lojaData: CreateLojaDto): Promise<Loja> {
    return this.lojasService.create(lojaData);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Store updated'})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiBody({type: UpdateLojaDto})
  async update(@Param('id', ParseIntPipe) id:number, @Body() lojaData: UpdateLojaDto): Promise<UpdateResult> {
    lojaData.id = id;
    return this.lojasService.update(lojaData);
  }  

  @Delete(':id')
  @ApiOkResponse({ description: 'Store deleted '})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.lojasService.delete(id);
  }   
  
}
