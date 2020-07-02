import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Avaliacao } from './avaliacao.entity';
import { AvaliacoesService } from './avaliacoes.service';

@Controller('avaliacoes')
export class AvaliacoesController {
  
  constructor(private avaliacoesService: AvaliacoesService){}

  @Get()
  index(): Promise<Avaliacao[]> {
    return this.avaliacoesService.findAll();
  }    

  @Post()
  async create(@Body() avaliacaoData: Avaliacao): Promise<Avaliacao> {
    return this.avaliacoesService.create(avaliacaoData);
  }

  @Put(':id')
  async update(@Param('id') id:string, @Body() avaliacaoData: Avaliacao): Promise<UpdateResult> {
    avaliacaoData.id = Number(id);
    return this.avaliacoesService.update(avaliacaoData);
  }  

  @Delete(':id')
  async delete(@Param('id') id:string): Promise<DeleteResult> {
    return this.avaliacoesService.delete(Number(id));
  }  

}
