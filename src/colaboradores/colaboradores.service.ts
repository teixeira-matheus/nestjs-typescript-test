import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Colaborador } from './colaborador.entity';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';

@Injectable()
export class ColaboradoresService {
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>,
  ) { }

  async findAll(): Promise<Colaborador[]> {
    return await this.colaboradorRepository.find();
  }

  async create(colaborador: CreateColaboradorDto): Promise<Colaborador> {
    return await this.colaboradorRepository.save(colaborador);
  }

  async update(colaborador: UpdateColaboradorDto): Promise<UpdateResult> {
    return await this.colaboradorRepository.update(colaborador.id, colaborador);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.colaboradorRepository.delete(id);
  }

}
