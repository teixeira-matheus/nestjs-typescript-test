import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Colaborador } from './colaborador.entity';
import { ColaboradoresService } from './colaboradores.service';

@Controller('colaboradores')
export class ColaboradoresController {
  
  constructor(private colaboradoresService: ColaboradoresService){}

  @Get()
  index(): Promise<Colaborador[]> {
    return this.colaboradoresService.findAll();
  }    

  @Post()
  async create(@Body() colaboradorData: Colaborador): Promise<Colaborador> {
    return this.colaboradoresService.create(colaboradorData);
  }

  @Put(':id')
  async update(@Param('id') id:string, @Body() colaboradorData: Colaborador): Promise<UpdateResult> {
    colaboradorData.id = Number(id);
    return this.colaboradoresService.update(colaboradorData);
  }  

  @Delete(':id')
  async delete(@Param('id') id:string): Promise<DeleteResult> {
    return this.colaboradoresService.delete(Number(id));
  }   

}
