import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Loja } from './loja.entity';

@Injectable()
export class LojasService {
  constructor(
    @InjectRepository(Loja)
    private lojaRepository: Repository<Loja>,
  ) { }

  async findAll(): Promise<Loja[]> {
    return await this.lojaRepository.find();
  }

  async create(loja: Loja): Promise<Loja> {
    return await this.lojaRepository.save(loja);
  }

  async update(loja: Loja): Promise<UpdateResult> {
    return await this.lojaRepository.update(loja.id, loja);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.lojaRepository.delete(id);
  }

}
