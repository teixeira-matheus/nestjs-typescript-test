import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';


@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) { }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.find();
  }

  async create(cliente: Cliente): Promise<Cliente> {
    return await this.clienteRepository.save(cliente);
  }

  async update(cliente: Cliente): Promise<UpdateResult> {
    return await this.clienteRepository.update(cliente.id, cliente);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.clienteRepository.delete(id);
  }
  
}
