import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Loja } from './loja.entity';

@Injectable()
export class LojasService {
  constructor(
    @InjectRepository(Loja)
    private lojaRepository: Repository<Loja>,
  ) { }
}
