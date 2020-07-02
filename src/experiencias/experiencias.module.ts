import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienciasService } from './experiencias.service';
import { ExperienciasController } from './experiencias.controller';
import { Experiencia } from './experiencia.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Experiencia]),
  ],
  providers: [ExperienciasService],
  controllers: [ExperienciasController]
})
export class ExperienciasModule {}
