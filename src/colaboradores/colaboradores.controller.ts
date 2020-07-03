import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Colaborador } from './colaborador.entity';
import { ColaboradoresService } from './colaboradores.service';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { 
  ApiCreatedResponse, 
  ApiOkResponse, 
  ApiBadRequestResponse, 
  ApiInternalServerErrorResponse,
  ApiBody 
} from '@nestjs/swagger';

@Controller('colaboradores')
export class ColaboradoresController {
  
  constructor(private colaboradoresService: ColaboradoresService){}

  @Get()
  @ApiOkResponse({ description: 'Get all employees'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  index(): Promise<Colaborador[]> {
    return this.colaboradoresService.findAll();
  }    

  @Post()
  @ApiCreatedResponse({ description: 'Employee added'})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiBody({type: CreateColaboradorDto})
  async create(@Body() colaboradorData: CreateColaboradorDto): Promise<Colaborador> {
    return this.colaboradoresService.create(colaboradorData);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Employee updated'})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiBody({type: UpdateColaboradorDto})
  async update(@Param('id', ParseIntPipe) id:number, @Body() colaboradorData: UpdateColaboradorDto): Promise<UpdateResult> {
    colaboradorData.id = id;
    return this.colaboradoresService.update(colaboradorData);
  }  

  @Delete(':id')
  @ApiOkResponse({ description: 'Employee deleted '})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.colaboradoresService.delete(id);
  }   

}
