import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Experiencia } from './experiencia.entity';
import { ExperienciasService } from './experiencias.service';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';
import { 
  ApiCreatedResponse, 
  ApiOkResponse, 
  ApiBadRequestResponse, 
  ApiInternalServerErrorResponse,
  ApiBody 
} from '@nestjs/swagger';

@Controller('experiencias')
export class ExperienciasController {

  constructor(private experienciasService: ExperienciasService){}

  @Get()
  @ApiOkResponse({ description: 'Get all transactions/experiences'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  index(): Promise<Experiencia[]> {
    return this.experienciasService.findAll();
  }    

  @Post()
  @ApiCreatedResponse({ description: 'Experience/Transaction added'})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiBody({type: CreateExperienciaDto})
  async create(@Body() experienciaData: CreateExperienciaDto): Promise<Experiencia> {
    return this.experienciasService.create(experienciaData);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Experience/Transaction updated'})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiBody({type: UpdateExperienciaDto})
  async update(@Param('id', ParseIntPipe) id:number, @Body() experienciaData: UpdateExperienciaDto): Promise<UpdateResult> {
    experienciaData.id = id;
    return this.experienciasService.update(experienciaData);
  }  

  @Delete(':id')
  @ApiOkResponse({ description: 'Experience/Transaction deleted '})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.experienciasService.delete(id);
  }   
  
}
