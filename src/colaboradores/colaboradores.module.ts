import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradoresService } from './colaboradores/colaboradores.service';
import { ColaboradoresController } from './colaboradores/colaboradores.controller';
import { Colaborador } from './colaborador.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Colaborador]),
  ],
  providers: [ColaboradoresService],
  controllers: [ColaboradoresController]
})
export class ColaboradoresModule {}
