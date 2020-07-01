import { Module } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores/colaboradores.service';
import { ColaboradoresController } from './colaboradores/colaboradores.controller';

@Module({
  providers: [ColaboradoresService],
  controllers: [ColaboradoresController]
})
export class ColaboradoresModule {}
