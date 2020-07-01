import { Module } from '@nestjs/common';
import { AvaliacoesService } from './avaliacoes/avaliacoes.service';
import { AvaliacoesController } from './avaliacoes/avaliacoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avaliacao } from './avaliacao.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Avaliacao]),
  ],
  providers: [AvaliacoesService],
  controllers: [AvaliacoesController]
})
export class AvaliacoesModule {}
