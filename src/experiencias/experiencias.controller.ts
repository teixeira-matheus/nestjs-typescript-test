import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Experiencia } from './experiencia.entity';
import { ExperienciasService } from './experiencias.service';

@Controller('experiencias')
export class ExperienciasController {

  constructor(private experienciasService: ExperienciasService){}

  @Get()
  index(): Promise<Experiencia[]> {
    return this.experienciasService.findAll();
  }    

  @Post()
  async create(@Body() experienciaData: Experiencia): Promise<Experiencia> {
    return this.experienciasService.create(experienciaData);
  }

  @Put(':id')
  async update(@Param('id') id:string, @Body() experienciaData: Experiencia): Promise<UpdateResult> {
    experienciaData.id = Number(id);
    return this.experienciasService.update(experienciaData);
  }  

  @Delete(':id')
  async delete(@Param('id') id:string): Promise<DeleteResult> {
    return this.experienciasService.delete(Number(id));
  }   
  
}
