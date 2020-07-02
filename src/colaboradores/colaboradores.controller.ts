import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Colaborador } from './colaborador.entity';
import { ColaboradoresService } from './colaboradores.service';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';

@Controller('colaboradores')
export class ColaboradoresController {
  
  constructor(private colaboradoresService: ColaboradoresService){}

  @Get()
  index(): Promise<Colaborador[]> {
    return this.colaboradoresService.findAll();
  }    

  @Post()
  async create(@Body() colaboradorData: CreateColaboradorDto): Promise<Colaborador> {
    return this.colaboradoresService.create(colaboradorData);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id:number, @Body() colaboradorData: UpdateColaboradorDto): Promise<UpdateResult> {
    colaboradorData.id = id;
    return this.colaboradoresService.update(colaboradorData);
  }  

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.colaboradoresService.delete(id);
  }   

}
