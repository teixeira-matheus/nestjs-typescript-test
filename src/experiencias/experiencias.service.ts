import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Experiencia } from './experiencia.entity';

@Injectable()
export class ExperienciasService {
  constructor(
    @InjectRepository(Experiencia)
    private experienciaRepository: Repository<Experiencia>,
  ) { }

  async findAll(): Promise<Experiencia[]> {
    return await this.experienciaRepository.find();
  }

  async create(experiencia: Experiencia): Promise<Experiencia> {
    return await this.experienciaRepository.save(experiencia);
  }

  async update(experiencia: Experiencia): Promise<UpdateResult> {
    return await this.experienciaRepository.update(experiencia.id, experiencia);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.experienciaRepository.delete(id);
  }

}
