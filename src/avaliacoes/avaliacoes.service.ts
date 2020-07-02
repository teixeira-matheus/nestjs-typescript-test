import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Avaliacao } from './avaliacao.entity';

@Injectable()
export class AvaliacoesService {
  constructor(
    @InjectRepository(Avaliacao)
    private avaliacaoRepository: Repository<Avaliacao>,
  ) { }

  async findAll(): Promise<Avaliacao[]> {
    return await this.avaliacaoRepository.find();
  }

  async create(avaliacao: Avaliacao): Promise<Avaliacao> {
    return await this.avaliacaoRepository.save(avaliacao);
  }

  async update(avaliacao: Avaliacao): Promise<UpdateResult> {
    return await this.avaliacaoRepository.update(avaliacao.id, avaliacao);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.avaliacaoRepository.delete(id);
  }

}
