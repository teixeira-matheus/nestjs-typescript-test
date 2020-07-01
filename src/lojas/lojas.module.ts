import { Module } from '@nestjs/common';
import { LojasService } from './lojas/lojas.service';
import { LojasController } from './lojas/lojas.controller';

@Module({
  providers: [LojasService],
  controllers: [LojasController]
})
export class LojasModule {}
