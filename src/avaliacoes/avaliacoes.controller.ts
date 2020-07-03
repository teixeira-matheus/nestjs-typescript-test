import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Avaliacao } from './avaliacao.entity';
import { AvaliacoesService } from './avaliacoes.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { 
  ApiCreatedResponse, 
  ApiOkResponse, 
  ApiBadRequestResponse, 
  ApiInternalServerErrorResponse,
  ApiBody 
} from '@nestjs/swagger';

@Controller('avaliacoes')
export class AvaliacoesController {
  
  constructor(private avaliacoesService: AvaliacoesService){}

  @Get()
  @ApiOkResponse({ description: 'Get all evaluations'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  index(): Promise<Avaliacao[]> {
    return this.avaliacoesService.findAll();
  }    

  @Post()
  @ApiCreatedResponse({ description: 'Evaluation created'})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiBody({type: CreateAvaliacaoDto})
  async create(@Body() avaliacaoData: CreateAvaliacaoDto): Promise<Avaliacao> {
    return this.avaliacoesService.create(avaliacaoData);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Evaluation deleted '})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.avaliacoesService.delete(id);
  }  

}
