import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Experiencia } from './experiencia.entity';
import { ExperienciasService } from './experiencias.service';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';

@Controller('experiencias')
export class ExperienciasController {

  constructor(private experienciasService: ExperienciasService){}

  @Get()
  index(): Promise<Experiencia[]> {
    return this.experienciasService.findAll();
  }    

  @Post()
  async create(@Body() experienciaData: CreateExperienciaDto): Promise<Experiencia> {
    return this.experienciasService.create(experienciaData);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id:number, @Body() experienciaData: UpdateExperienciaDto): Promise<UpdateResult> {
    experienciaData.id = id;
    return this.experienciasService.update(experienciaData);
  }  

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.experienciasService.delete(id);
  }   
  
}
