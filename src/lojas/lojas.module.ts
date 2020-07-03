import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LojasService } from './lojas.service';
import { LojasController } from './lojas.controller';
import { Loja } from './loja.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Loja]),
  ],
  providers: [LojasService],
  controllers: [LojasController]
})
export class LojasModule {}
