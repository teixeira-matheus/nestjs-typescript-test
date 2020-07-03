import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Experiencia } from './experiencia.entity';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';

@Injectable()
export class ExperienciasService {
  constructor(
    @InjectRepository(Experiencia)
    private experienciaRepository: Repository<Experiencia>,
  ) { }

  async findAll(): Promise<Experiencia[]> {
    return await this.experienciaRepository.find();
  }

  async create(experiencia: CreateExperienciaDto): Promise<Experiencia> {
    return await this.experienciaRepository.save(experiencia);
  }

  async update(experiencia: UpdateExperienciaDto): Promise<UpdateResult> {
    return await this.experienciaRepository.update(experiencia.id, experiencia);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.experienciaRepository.delete(id);
  }

}
