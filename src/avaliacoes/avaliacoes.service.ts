import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Avaliacao } from './avaliacao.entity';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto'

@Injectable()
export class AvaliacoesService {
  constructor(
    @InjectRepository(Avaliacao)
    private avaliacaoRepository: Repository<Avaliacao>,
  ) { }

  async findAll(): Promise<Avaliacao[]> {
    return await this.avaliacaoRepository.find();
  }

  async create(avaliacao: CreateAvaliacaoDto): Promise<Avaliacao> {
    return await this.avaliacaoRepository.save(avaliacao);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.avaliacaoRepository.delete(id);
  }

}
