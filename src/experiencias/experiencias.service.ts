import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Experiencia } from './experiencia.entity';

@Injectable()
export class ExperienciasService {
  constructor(
    @InjectRepository(Experiencia)
    private experienciaRepository: Repository<Experiencia>,
  ) { }
}
