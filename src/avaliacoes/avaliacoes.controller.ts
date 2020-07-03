import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Avaliacao } from './avaliacao.entity';
import { AvaliacoesService } from './avaliacoes.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';

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

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.avaliacoesService.delete(id);
  }  

}
