import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) { }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.find();
  }

  async create(cliente: CreateClienteDto): Promise<Cliente> {
    return await this.clienteRepository.save(cliente);
  }

  async update(cliente: UpdateClienteDto): Promise<UpdateResult> {
    return await this.clienteRepository.update(cliente.id, cliente);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.clienteRepository.delete(id);
  }
  
}
