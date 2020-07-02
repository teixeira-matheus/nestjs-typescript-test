import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Loja } from './loja.entity';
import { LojasService } from './lojas.service';

@Controller('lojas')
export class LojasController {

  constructor(private lojasService: LojasService){}

  @Get()
  index(): Promise<Loja[]> {
    return this.lojasService.findAll();
  }    

  @Post()
  async create(@Body() lojaData: Loja): Promise<Loja> {
    return this.lojasService.create(lojaData);
  }

  @Put(':id')
  async update(@Param('id') id:string, @Body() lojaData: Loja): Promise<UpdateResult> {
    lojaData.id = Number(id);
    return this.lojasService.update(lojaData);
  }  

  @Delete(':id')
  async delete(@Param('id') id:string): Promise<DeleteResult> {
    return this.lojasService.delete(Number(id));
  }   
  
}
