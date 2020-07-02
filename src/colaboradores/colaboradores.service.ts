import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Colaborador } from './colaborador.entity';

@Injectable()
export class ColaboradoresService {
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>,
  ) { }
}
