import { Module } from '@nestjs/common';
import { ExperienciasService } from './experiencias/experiencias.service';
import { ExperienciasController } from './experiencias/experiencias.controller';

@Module({
  providers: [ExperienciasService],
  controllers: [ExperienciasController]
})
export class ExperienciasModule {}
