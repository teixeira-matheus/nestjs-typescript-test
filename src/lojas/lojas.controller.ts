import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Loja } from './loja.entity';
import { LojasService } from './lojas.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';

@Controller('lojas')
export class LojasController {

  constructor(private lojasService: LojasService){}

  @Get()
  index(): Promise<Loja[]> {
    return this.lojasService.findAll();
  }    

  @Post()
  async create(@Body() lojaData: CreateLojaDto): Promise<Loja> {
    return this.lojasService.create(lojaData);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id:number, @Body() lojaData: UpdateLojaDto): Promise<UpdateResult> {
    lojaData.id = id;
    return this.lojasService.update(lojaData);
  }  

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.lojasService.delete(id);
  }   
  
}
