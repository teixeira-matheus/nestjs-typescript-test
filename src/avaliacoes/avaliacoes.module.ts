import { Module } from '@nestjs/common';
import { AvaliacoesService } from './avaliacoes/avaliacoes.service';
import { AvaliacoesController } from './avaliacoes/avaliacoes.controller';

@Module({
  providers: [AvaliacoesService],
  controllers: [AvaliacoesController]
})
export class AvaliacoesModule {}
