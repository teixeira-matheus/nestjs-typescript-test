import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienciasService } from './experiencias/experiencias.service';
import { ExperienciasController } from './experiencias/experiencias.controller';
import { Experiencia } from './experiencia.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Experiencia]),
  ],
  providers: [ExperienciasService],
  controllers: [ExperienciasController]
})
export class ExperienciasModule {}
