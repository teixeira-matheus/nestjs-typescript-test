import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Avaliacao } from './avaliacao.entity';
import { AvaliacoesService } from './avaliacoes.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Controller('avaliacoes')
export class AvaliacoesController {
  
  constructor(private avaliacoesService: AvaliacoesService){}

  @Get()
  index(): Promise<Avaliacao[]> {
    return this.avaliacoesService.findAll();
  }    

  @Post()
  async create(@Body() avaliacaoData: CreateAvaliacaoDto): Promise<Avaliacao> {
    return this.avaliacoesService.create(avaliacaoData);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() avaliacaoData: UpdateAvaliacaoDto): Promise<UpdateResult> {
    avaliacaoData.id = id;
    return this.avaliacoesService.update(avaliacaoData);
  }  

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.avaliacoesService.delete(id);
  }  

}
